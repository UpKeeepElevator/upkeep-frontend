import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Fault } from 'src/app/core/models/Fault';
import { Job } from 'src/app/core/models/job';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { fake_fault } from 'src/app/core/utils/fake_fault';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';
import { SelectFaultComponent } from '../select-fault/select-fault.component';

@Component({
  selector: 'app-dashboard-tech',
  templateUrl: './dashboard-tech.component.html',
  styleUrls: ['./dashboard-tech.component.scss'],
  imports: [
    SidebarButtonComponent,
    HomeButtonComponent,
    IonIcon,
    DashboardItemTechComponent,
  ],
})
export class DashboardTechComponent implements OnInit {
  protected activeUser = computed(() => this._userService.user());
  private _userService = inject(UserService);
  private _techService = inject(TechService);
  private _modal = inject(ModalController);

  currentFault = computed(() => this._techService.activeFault());

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      star: '/assets/icon/star-full.svg',
    });
  }

  ngOnInit() {
    this._techService
      .GetJobsDone(this.activeUser().id_user)
      .subscribe({ next: (jobs) => (this.jobs = jobs) });

    this._techService.GetPendingFaults(this.activeUser().id_user).subscribe({
      next: (faults) => {
        this.pendingFaults = faults;
      },
    });
  }
  private datePipe = new DatePipe('es');
  private jobs: Job[] = [];
  private activeJobs: Job[] = [];

  private pendingFaults: Fault[] = [];

  GetActivities(): string[] {
    return this.jobs
      .filter((job) => job.date != null)
      .map(
        (job) =>
          `Resolviste un ${job.job} el ${this.datePipe.transform(
            job.date,
            'EEEE dd/MM/yyyy'
          )}`
      );
  }

  GetLastclients(): string[] {
    return [];
  }

  //TODO: Buscar averias pendientes
  GetPendingFaults(): Fault[] {
    return this.pendingFaults;
  }

  OpenPendingFault() {
    this._modal
      .create({
        component: SelectFaultComponent,
        cssClass: 'modal-selection',
        componentProps: {
          faults: this.pendingFaults,
        },
      })
      .then((modal) => modal.present());
  }

  GetActiveFault(): string {
    if (this.currentFault() == fake_fault) {
      return 'No tienes averías activas';
    }

    return 'Solucionando una avería en Agora Mall. ¿Lograste descifrar qué está pasando? ¡Completa el reporte y cierra la solicitud!';
  }
}

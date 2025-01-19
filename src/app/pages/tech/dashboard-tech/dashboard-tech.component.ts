import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Job } from 'src/app/core/models/job';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

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
  }
  private datePipe = new DatePipe('es');
  private jobs: Job[] = [];
  private activeJobs: Job[] = [];

  GetActivities(): string[] {
    return this.jobs.map(
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
  GetPendingFaults(): any[] {
    return [];
  }

  GetActiveFault(): string {
    if (this.activeJobs.length > 0)
      return 'Solucionando una avería en Agora Mall. ¿Lograste descifrar qué está pasando? ¡Completa el reporte y cierra la solicitud!';
    else return 'No tienes averías activas';
  }
}

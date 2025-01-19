import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';

@Component({
  selector: 'app-route-tech',
  templateUrl: './route-tech.component.html',
  styleUrls: ['./route-tech.component.scss'],
  imports: [IonIcon, DashboardItemTechComponent],
})
export class RouteTechComponent implements OnInit {
  private _route = inject(Router);
  private _modal = inject(ModalController);
  todayRoute = [];

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      actionRight: '/assets/icon/action-right.svg',
      person: '/assets/icon/person.svg',
      location: '/assets/icon/location.svg',
      alert: '/assets/icon/alert.svg',
    });
  }

  ngOnInit() {}

  GetCurrentFault(): string {
    return 'Estás trabajando con una avería en Agora Mall. ¿O ya terminaste?';
  }

  CloseModal() {
    this._modal.dismiss();
  }

  RequestService() {
    this.CloseModal();
    this._route.navigate(['/technician/solicitar']);
  }
  ReportFault() {
    this.CloseModal();
    this._route.navigate(['/technician/report']);
  }
}

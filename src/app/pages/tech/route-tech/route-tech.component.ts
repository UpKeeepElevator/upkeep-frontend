import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as L from 'leaflet';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';
@Component({
  selector: 'app-route-tech',
  templateUrl: './route-tech.component.html',
  styleUrls: ['./route-tech.component.scss'],
  imports: [IonIcon, DashboardItemTechComponent],
})
export class RouteTechComponent implements OnInit, AfterViewInit {
  private _route = inject(Router);
  private _modal = inject(ModalController);
  todayRoute: TechRoute[] = [];

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      actionRight: '/assets/icon/action-right.svg',
      person: '/assets/icon/person.svg',
      location: '/assets/icon/location.svg',

      alert: '/assets/icon/alert.svg',
    });
  }
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.5, 30.5],
      zoom: 0.5,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    L.marker([50.5, 30.5], {
      icon: L.icon({ iconUrl: '/assets/icon/location.svg' }),
    }).addTo(this.map);

    this.map.panTo([50.5, 30.5]);

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit() {
    this.GetTodayRoute();
  }

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

  GetTodayRoute() {
    this.todayRoute = [
      {
        building: 'Agora Mall',
        direction: 'Calle 1ra, Santo Domingo',
        job: 'Averia',
      },
    ];
  }
}

export interface TechRoute {
  building: string;
  job: string;
  direction: string;
}

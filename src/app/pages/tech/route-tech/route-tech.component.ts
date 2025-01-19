import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';
@Component({
  selector: 'app-route-tech',
  templateUrl: './route-tech.component.html',
  styleUrls: ['./route-tech.component.scss'],
  imports: [IonIcon, DashboardItemTechComponent, GoogleMapsModule],
})
export class RouteTechComponent implements OnInit, AfterViewInit {
  _route = inject(Router);
  private _modal = inject(ModalController);
  todayRoute: TechRoute[] = [];

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      actionRight: '/assets/icon/action-right.svg',
      person: '/assets/icon/person.svg',
      location: '/assets/icon/location.svg',
      transportation: '/assets/icon/transportation.svg',

      alert: '/assets/icon/alert.svg',
    });
  }

  ngAfterViewInit(): void {
    // this.initMap();
  }

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  position: google.maps.LatLngLiteral = {
    lat: 18.448213931857616,
    lng: -69.94583078047789,
  };
  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: this.position,
    zoom: 15,
    disableDefaultUI: true,
    cameraControl: false,
    gestureHandling: 'none',
  };

  ngOnInit() {
    this.GetTodayRoute();
  }

  GetCurrentFault(): string {
    return 'Estás trabajando con una avería en Agora Mall. ¿O ya terminaste?';
  }

  CloseModal() {
    this._modal.dismiss();
  }

  NextLocation() {
    return 'Torre caney';
  }
  ActualLocation() {
    return 'Acropolis';
  }
  ContinueRoute() {
    throw new Error('Method not implemented.');
  }

  RequestService() {
    this.CloseModal();
    this._route.navigate(['/technician/solicitar']);
  }
  ReportFault() {
    this.CloseModal();
    this._route.navigate(['/technician/report']);
  }

  //TODO: Utilizar ruta actual
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

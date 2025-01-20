import {
  AfterViewInit,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { TechService } from 'src/app/core/services/tech.service';
import { fake_fault } from 'src/app/core/utils/fake_fault';
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

  private _techService = inject(TechService);
  currentFault = computed(() => this._techService.activeFault());

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      actionRight: '/assets/icon/action-right.svg',
      person: '/assets/icon/person.svg',
      location: '/assets/icon/location.svg',
      transportation: '/assets/icon/transportation.svg',
      close: '/assets/icon/minimize-action.svg',
      alert: '/assets/icon/alert.svg',
    });
  }

  ngAfterViewInit(): void {}

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  position: google.maps.LatLngLiteral = {
    lat: 20.448213931857616,
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

  noActiveJob: boolean = false;

  ngOnInit() {
    this.GetTodayRoute();

    if (this.currentFault().faultId == fake_fault.faultId) {
      this.noActiveJob = true;
    } else {
      const location = this.currentFault().building.location?.split(',');

      if (location && location.length == 2) {
        this.position.lat = parseFloat(location[0].trim());
        this.position.lng = parseFloat(location[1].trim());
      }
    }
  }

  GetCurrentFault(): string {
    if (this.currentFault().faultId == fake_fault.faultId) {
      return 'No tienes averías activas';
    }

    return `Estás trabajando con una avería en ${
      this.currentFault().building.name
    }. ¿O ya terminaste?`;
  }

  CloseModal() {
    this._modal.dismiss();
  }

  NextLocation() {
    let nextLocation = this.todayRoute[1];
    if (nextLocation) return nextLocation.building;
    return 'Ruta completa';
  }
  ActualLocation() {
    return this.currentFault().building.name;
  }
  ContinueRoute() {
    this._modal.dismiss();
    this._route.navigate(['/technician/maintenance']);
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
    //TODO: Utilizar ruta actual
    this.todayRoute = [];
  }
}

export interface TechRoute {
  building: string;
  job: string;
  direction: string;
}

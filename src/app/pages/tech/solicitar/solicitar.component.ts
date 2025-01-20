import { Component, computed, inject, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';
import { ToggleElevatorSectionComponent } from '../../../shared/components/toggle-elevator-section/toggle-elevator-section.component';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular/standalone';
import { Fault } from 'src/app/core/models/Fault';
import { RequestForm } from 'src/app/core/models/request';
import { Service } from 'src/app/core/models/service';
import { RequestService } from 'src/app/core/services/request.service';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { fake_fault } from 'src/app/core/utils/fake_fault';
import { AddServiceRequestModalComponent } from 'src/app/shared/components/add-service-request-modal/add-service-request-modal.component';
import { RequestViewModalComponent } from 'src/app/shared/components/request-view-modal/request-view-modal.component';
@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss'],
  imports: [
    SidebarButtonComponent,
    HomeButtonComponent,
    IonIcon,
    ToggleElevatorSectionComponent,
  ],
})
export class SolicitarComponent implements OnInit {
  private _modal = inject(ModalController);
  private _router = inject(Router);
  private techService = inject(TechService);
  private requestService = inject(RequestService);

  private userService = inject(UserService);
  private user = computed(() => this.userService.user());

  protected activeFault: Fault = fake_fault;

  requests: RequestForm[] = [];
  services: Service[] = [];

  async AddService() {
    const requestView = await this._modal.create({
      component: AddServiceRequestModalComponent,
      cssClass: 'modal-selection',
    });
    await requestView.present();

    //TODO: Agregar servicio
    const { data, role } = await requestView.onWillDismiss();
    if (role == 'Success') {
      let newRequest: RequestForm = data;
      newRequest.tecnicoId = this.user().id_user;
      newRequest.ascensorId = this.activeFault.elevatorId;

      this.requests.push(newRequest);
    }
  }

  constructor() {
    addIcons({
      expand: '/assets/icon/expand-action.svg',
      plus: '/assets/icon/plus.svg',
    });
  }

  ngOnInit() {
    this.activeFault = this.techService.activeFault();
    this.requestService.getServices().subscribe({
      next: (types) => (this.services = types),
    });
    // this.Debug();
  }

  Debug() {
    this.AddService();
  }

  counter: number = 0;
  SendRequest() {
    if (this.counter == 1) return;
    this.counter = 1;
    this.requests.forEach((requestToSend) => {
      // let formData = new FormData();
      // formData.append('tecnicoId', requestToSend.tecnicoId.toString());
      // formData.append('ascensorId', requestToSend.ascensorId.toString());
      // formData.append('fechaSolicitud', requestToSend.fechaSolicitud);
      // formData.append('prioridadId', requestToSend.prioridadId.toString());
      // formData.append(
      //   'descripcionSolicitud',
      //   requestToSend.descripcionSolicitud
      // );
      // formData.append('servicioId', requestToSend.servicioId.toString());

      this.requestService.postRequest(requestToSend).subscribe({
        next: (data) => {
          this._router.navigate(['/technician']);
        },
      });
    });
  }

  getServiceName(serviceId: number) {
    const service = this.services.find((x) => x.serviceId == serviceId);
    return service?.serviceName ?? '';
  }

  async OpenRequest() {
    const requestView = await this._modal.create({
      component: RequestViewModalComponent,
      cssClass: 'modal-selection',
      componentProps: {
        requests: this.requests,
      },
    });
    await requestView.present();
  }
  ChangeSectionType($event: string) {
    console.log('Section type: ' + $event);
  }
}

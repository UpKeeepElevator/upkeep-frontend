import { Component, inject, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';
import { ToggleElevatorSectionComponent } from '../../../shared/components/toggle-elevator-section/toggle-elevator-section.component';

import { ModalController } from '@ionic/angular/standalone';
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

  async AddService() {
    const requestView = await this._modal.create({
      component: AddServiceRequestModalComponent,
      cssClass: 'modal-selection',
    });
    await requestView.present();

    //TODO: Agregar servicio
    const { data, role } = await requestView.onWillDismiss();
  }

  SendRequest() {
    throw new Error('Method not implemented.');
  }

  async OpenRequest() {
    const requestView = await this._modal.create({
      component: RequestViewModalComponent,
      cssClass: 'modal-selection',
      componentProps: {
        requests: this.solicitudes,
      },
    });
    await requestView.present();
  }
  solicitudes = [];

  constructor() {
    addIcons({
      expand: '/assets/icon/expand-action.svg',
      plus: '/assets/icon/plus.svg',
    });
  }

  ngOnInit() {}

  ChangeSectionType($event: string) {
    console.log('Section type: ' + $event);
  }
}

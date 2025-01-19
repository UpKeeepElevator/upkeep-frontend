import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';
import { ToggleElevatorSectionComponent } from '../../../shared/components/toggle-elevator-section/toggle-elevator-section.component';

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
  AddService() {
    throw new Error('Method not implemented.');
  }
  SendRequest() {
    throw new Error('Method not implemented.');
  }
  OpenRequest() {
    throw new Error('Method not implemented.');
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

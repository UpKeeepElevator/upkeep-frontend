import { Component, inject, Input, OnInit } from '@angular/core';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { RequestForm } from 'src/app/core/models/request';

@Component({
  selector: 'app-request-view-modal',
  templateUrl: './request-view-modal.component.html',
  styleUrls: ['./request-view-modal.component.scss'],
  imports: [IonIcon],
})
export class RequestViewModalComponent implements OnInit {
  private _modal = inject(ModalController);

  @Input() requests: RequestForm[] = [];

  constructor() {}

  ngOnInit() {
    addIcons({
      close: '/assets/icon/close-white.svg',
      alert: '/assets/icon/alert.svg',
    });
  }

  CloseModal() {
    this._modal.dismiss();
  }

  SendRequest() {
    this._modal.dismiss('Close', 'Success');
  }
}

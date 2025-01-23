import { Component, inject, Input, OnInit } from '@angular/core';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Priority, RequestForm } from 'src/app/core/models/request';
import { Service, ServiceType } from 'src/app/core/models/service';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-request-view-modal',
  templateUrl: './request-view-modal.component.html',
  styleUrls: ['./request-view-modal.component.scss'],
  imports: [IonIcon],
})
export class RequestViewModalComponent implements OnInit {
  private _modal = inject(ModalController);
  private requestService = inject(RequestService);

  @Input() requests: RequestForm[] = [];

  services: Service[] = [];
  serviceTypes: ServiceType[] = [];
  priorities: Priority[] = [];

  constructor() {}

  ngOnInit() {
    addIcons({
      close: '/assets/icon/close-white.svg',
      alert: '/assets/icon/alert.svg',
    });

    this.requestService.getServiceTypes().subscribe({
      next: (types) => (this.serviceTypes = types),
    });
    this.requestService.getServices().subscribe({
      next: (types) => (this.services = types),
    });
    this.requestService.getPriorities().subscribe({
      next: (data) => (this.priorities = data),
    });
  }

  getPriority(priorityId: number) {
    const priority = this.priorities.find((x) => x.priorityId == priorityId);
    return priority?.priorityName ?? '';
  }
  getServiceName(serviceId: number) {
    const service = this.services.find((x) => x.serviceId == serviceId);
    return service?.serviceName ?? '';
  }

  CloseModal() {
    this._modal.dismiss();
  }

  SendRequest() {
    this._modal.dismiss('Close', 'Success');
  }
}

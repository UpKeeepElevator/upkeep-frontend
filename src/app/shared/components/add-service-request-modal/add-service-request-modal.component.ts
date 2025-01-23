import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Priority, RequestForm } from 'src/app/core/models/request';
import { Service, ServiceType } from 'src/app/core/models/service';
import { RequestService } from 'src/app/core/services/request.service';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-add-service-request-modal',
  templateUrl: './add-service-request-modal.component.html',
  styleUrls: ['./add-service-request-modal.component.scss'],
  imports: [ReactiveFormsModule, IonIcon, FormInputComponent],
})
export class AddServiceRequestModalComponent implements OnInit {
  private _modal = inject(ModalController);
  private fb = inject(FormBuilder);

  private requestService = inject(RequestService);

  protected reportForm = this.fb.group({
    type: ['', Validators.required],
    service: ['', Validators.required],
    description: ['', Validators.required],
    priority: ['', Validators.required],
  });

  private get Type() {
    const typeId = this.reportForm.get('type')?.value;
    return typeId ? Number(typeId) : 0;
  }

  private get Service() {
    const serviceId = this.reportForm.get('service')?.value;
    return serviceId ? Number(serviceId) : 0;
  }
  private get Priority() {
    const priorityId = this.reportForm.get('priority')?.value;
    return priorityId ? Number(priorityId) : 0;
  }
  private get Description() {
    return this.reportForm.get('description')?.value ?? '';
  }

  servicesComplete: Service[] = [];
  services: Service[] = [];
  serviceTypes: ServiceType[] = [];
  priorities: Priority[] = [];

  constructor() {
    addIcons({
      close: '/assets/icon/close-white.svg',
      alert: '/assets/icon/alert.svg',
    });
  }

  ngOnInit() {
    this.requestService.getServiceTypes().subscribe({
      next: (types) => (this.serviceTypes = types),
    });
    this.requestService.getServices().subscribe({
      next: (types) => (this.servicesComplete = types),
    });
    this.requestService.getPriorities().subscribe({
      next: (data) => (this.priorities = data),
    });
  }

  ChangeServiceType($event: Event) {
    const servicesCopy = structuredClone(this.servicesComplete);
    this.services = servicesCopy.filter(
      (service) => service.serviceTypeId == this.Type
    );
  }

  sendForm() {
    //todo call service and send the report 😊

    const date = new Date().toISOString();

    let newRequest: RequestForm = {
      tecnicoId: 0,
      ascensorId: 0,
      fechaSolicitud: date,
      prioridadId: this.Priority,
      descripcionSolicitud: this.Description,
      servicioId: this.Service,
    };

    this._modal.dismiss(newRequest, 'Success');
  }

  closeModal() {
    this._modal.dismiss();
  }
}

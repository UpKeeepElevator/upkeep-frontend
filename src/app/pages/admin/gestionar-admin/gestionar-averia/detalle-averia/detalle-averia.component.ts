import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Fault, FaultType } from 'src/app/core/models/Fault';
import { user } from 'src/app/core/models/User';
import { FaultService } from 'src/app/core/services/fault.service';
import { TechService } from 'src/app/core/services/tech.service';
import { fake_fault } from 'src/app/core/utils/fake_fault';
@Component({
  selector: 'app-detalle-averia',
  templateUrl: './detalle-averia.component.html',
  styleUrls: ['./detalle-averia.component.scss'],
  imports: [IonIcon, CommonModule, ReactiveFormsModule],
})
export class DetalleAveriaComponent implements OnInit {
  private _faultService = inject(FaultService);
  private _techService = inject(TechService);
  private _modal = inject(ModalController);

  @Input({ required: true }) fault: Fault = fake_fault;
  @Input() faultsTypes: FaultType[] = [];

  private fb = inject(FormBuilder);

  protected reportForm = this.fb.group({
    technician: ['', Validators.required],
  });

  technicians: user[] = [];

  constructor() {}

  ngOnInit() {
    addIcons({
      action: '/assets/icon/action.svg',
      actionRight: '/assets/icon/action-right.svg',
      person: '/assets/icon/person.svg',
      location: '/assets/icon/location.svg',
      transportation: '/assets/icon/transportation.svg',
      close: '/assets/icon/minimize-action.svg',
      alert: '/assets/icon/alert.svg',
    });

    this._faultService.getFault(this.fault.faultId).subscribe({
      next: (data) => {
        console.log(data);
        this.fault = data;
      },
    });
    this._techService.getTechnicians().subscribe({
      next: (data) => (this.technicians = data),
    });
  }

  getFaultType(faultTypeId: number) {
    const type = this.faultsTypes.find((x) => x.id == faultTypeId);
    return type?.name ?? '';
  }

  private get Technician() {
    const buildId = this.reportForm.get('technician')?.value;
    return buildId ? Number(buildId) : 0;
  }

  sendForm() {
    this._faultService
      .assignTechnicianToFault(this.Technician, this.fault.faultId)
      .subscribe({
        next: (data) => {
          console.log('Assign fault to technician', data);
          this.closeModal();
        },
      });
  }

  closeModal() {
    this._modal.dismiss();
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { Fault, FaultType } from 'src/app/core/models/Fault';
import { FaultService } from 'src/app/core/services/fault.service';
import { DetalleAveriaComponent } from 'src/app/pages/admin/gestionar-admin/gestionar-averia/detalle-averia/detalle-averia.component';

@Component({
  selector: 'app-fault-card',
  templateUrl: './fault-card.component.html',
  styleUrls: ['./fault-card.component.scss'],
  imports: [CommonModule],
})
export class FaultCardComponent implements OnInit {
  faultsTypes: FaultType[] = [];
  private _faultService = inject(FaultService);
  private _modal = inject(ModalController);

  fault = input.required<Fault>();

  constructor() {}

  ngOnInit() {
    this._faultService.getFaulTypes().subscribe({
      next: (data) => {
        this.faultsTypes = data;
      },
    });
  }

  getFaultType(faultTypeId: number) {
    const type = this.faultsTypes.find((x) => x.id == faultTypeId);
    return type?.name ?? '';
  }

  getEstado(faultObj: Fault) {
    if (!faultObj.technicianId) return 'Pendiente';
    else if (!faultObj.responseDate) return 'En progreso';
    else return 'Atendida';
  }
  async openFaultDetail() {
    const modal = await this._modal.create({
      component: DetalleAveriaComponent,
      cssClass: 'modal-selection',
      componentProps: {
        fault: this.fault(),
        faultsTypes: this.faultsTypes,
      },
    });
    await modal.present();
  }
}

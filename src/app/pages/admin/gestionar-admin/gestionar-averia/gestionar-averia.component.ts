import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Fault } from 'src/app/core/models/Fault';
import { FaultService } from 'src/app/core/services/fault.service';
import { FaultCardComponent } from 'src/app/shared/components/fault-card/fault-card.component';
export interface items {
  Cliente: string;
  Edificio: string;
  IDProducto: string;
  Fecha: Date;
  Motivo: string;
  imageSrc: string;
}
@Component({
  selector: 'app-gestionar-averia',
  templateUrl: './gestionar-averia.component.html',
  styleUrls: ['./gestionar-averia.component.scss'],
  imports: [CommonModule, FaultCardComponent],
})
export class GestionarAveriaComponent implements OnInit {
  private _faultService = inject(FaultService);

  faults: Fault[] = [];

  ngOnInit(): void {
    this._faultService.getFaults().subscribe({
      next: (data) => {
        this.faults = data;
      },
    });
  }
}

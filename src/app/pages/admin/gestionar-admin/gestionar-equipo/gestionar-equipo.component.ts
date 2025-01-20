import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Elevator } from 'src/app/core/models/Elevator.model';
import { ElevatorService } from 'src/app/core/services/elevator.service';

@Component({
  selector: 'app-gestionar-equipo',
  templateUrl: './gestionar-equipo.component.html',
  styleUrls: ['./gestionar-equipo.component.scss'],
  imports: [CommonModule],
})
export class GestionarEquipoComponent implements OnInit {
  private _elevatorService = inject(ElevatorService);

  equipos: Elevator[] = [];

  ngOnInit(): void {
    this._elevatorService
      .getElevators()
      .subscribe({ next: (data) => (this.equipos = data) });
  }

  onNuevoEquipo(): void {
    console.log('Crear nuevo equipo');
  }

  onVerDetalles(equipo: any): void {
    console.log('Detalles del equipo:', equipo);
  }
}

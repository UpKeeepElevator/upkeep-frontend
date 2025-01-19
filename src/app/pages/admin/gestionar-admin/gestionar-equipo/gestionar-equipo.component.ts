import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-equipo',
  templateUrl: './gestionar-equipo.component.html',
  styleUrls: ['./gestionar-equipo.component.scss'],
  imports: [CommonModule],
})
export class GestionarEquipoComponent {
  equipos = Array.from({ length: 20 }, (_, index) => ({
    id: `009384-${index}`,
    marca: 'MarcaX',
    cliente: `Cliente${index}`,
    ultimoMantenimiento: `2025-01-${10 + index}`,
    imagen: '/assets/cabinaExample.png',
  }));

  onNuevoEquipo(): void {
    console.log('Crear nuevo equipo');
  }

  onVerDetalles(equipo: any): void {
    console.log('Detalles del equipo:', equipo);
  }
}

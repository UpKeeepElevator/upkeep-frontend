import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-ruta',
  templateUrl: './gestionar-ruta.component.html',
  styleUrls: ['./gestionar-ruta.component.scss'],
  imports: [CommonModule],
})
export class GestionarRutaComponent {
  routes = [
    { id: 'IDTecnico1', name: 'Nombre1', date: 'Fecha1', equipment: 5 },
    { id: 'IDTecnico2', name: 'Nombre2', date: 'Fecha2', equipment: 5 },
    { id: 'IDTecnico3', name: 'Nombre3', date: 'Fecha3', equipment: 5 },
  ];

  onFilter(): void {
    console.log('Filter button clicked');
  }

  onManageRoute(route: any): void {
    console.log('Gestionar clicked for:', route);
  }
}


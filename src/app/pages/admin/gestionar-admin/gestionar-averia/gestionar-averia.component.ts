import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule]
})
export class GestionarAveriaComponent {

  items: items[] = [
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
      {
        Cliente: 'Radames',
        Edificio: 'Agora Mall',
        IDProducto: '16789', 
        Fecha: new Date(),
        Motivo: 'Abre y cierra la puerta',
        imageSrc: 'assets/cabinaExample.png',
      },
  ];
}

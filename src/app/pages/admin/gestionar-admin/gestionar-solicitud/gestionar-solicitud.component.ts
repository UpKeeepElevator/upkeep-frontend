import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Request {
  name: string;
  email: string;
  status: string;
  role: string;
  relatedTeam: string;
}
@Component({
  selector: 'app-gestionar-solicitud',
  templateUrl: './gestionar-solicitud.component.html',
  styleUrls: ['./gestionar-solicitud.component.scss'],
  imports: [CommonModule],
})
export class GestionarSolicitudComponent {

  requests: Request[] = [
    { name: 'Justin Septimus', email: 'example@email.com', status: 'Entregado', role: 'Tecnico', relatedTeam: 'Nombre artículo' },
    { name: 'Anika Rhiel Madsen', email: 'example@email.com', status: 'Solicitado', role: 'Tecnico', relatedTeam: 'Nombre artículo' },
    // Agrega más datos según sea necesario
  ];
}



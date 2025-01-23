import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Requesst } from 'src/app/core/models/request';
import { Service } from 'src/app/core/models/service';
import { user } from 'src/app/core/models/User';
import { RequestService } from 'src/app/core/services/request.service';
import { TechService } from 'src/app/core/services/tech.service';

@Component({
  selector: 'app-gestionar-solicitud',
  templateUrl: './gestionar-solicitud.component.html',
  styleUrls: ['./gestionar-solicitud.component.scss'],
  imports: [CommonModule],
})
export class GestionarSolicitudComponent implements OnInit {
  private _requestService = inject(RequestService);
  private _techService = inject(TechService);

  requests: Requesst[] = [];

  constructor() {}

  services: Service[] = [];

  technicias: user[] = [];

  ngOnInit(): void {
    this._requestService.getRequest().subscribe((requests) => {
      this.requests = requests;
    });
    this._requestService.getServices().subscribe({
      next: (services) => {
        this.services = services;
        console.error(services);
      },
    });

    this._techService
      .getTechnicians()
      .subscribe({ next: (data) => (this.technicias = data) });
  }

  getServiceName(arg0: number) {
    const item = this.services.find((service) => service.serviceId === arg0);

    return item?.serviceName ?? 0;
  }

  getTechnicianName(arg0: number) {
    const item = this.technicias.find(
      (technician) => technician.id_user === arg0
    );

    return item?.name_user ?? 0;
  }

  getTechnicianMail(arg0: number) {
    const item = this.technicias.find(
      (technician) => technician.id_user === arg0
    );

    return item?.email ?? '';
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { maintenanceListTransform } from '../adapters/maintanance.adapter';
import { MaintenanceAPI } from '../models/maintanance';

@Injectable({
  providedIn: 'root',
})
export class MaintananceService {
  private http = inject(HttpClient);
  private urlApi = environment.apiUrl;
  private _modal = inject(ModalController);

  constructor() {}

  getAllMaintanances() {
    const endpoint = `Mantenimiento`;
    return this.http
      .get<MaintenanceAPI[]>(`${this.urlApi}/${endpoint}`)
      .pipe(map((types_api) => maintenanceListTransform(types_api)));
  }
}

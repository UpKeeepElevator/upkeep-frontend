import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ClientListTransfrom,
  ClientTransform,
} from '../adapters/client.adapter';
import { ClientAPI } from '../models/Client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);
  private urlApi = environment.apiUrl;

  constructor() {}

  getClientId(id_user: number) {
    const endpoint = `Cliente/usuario/${id_user}`;
    return this.http
      .get<ClientAPI>(`${this.urlApi}/${endpoint}`)
      .pipe(map((client) => ClientTransform(client)));
  }

  getClients() {
    const endpoint = `Cliente`;
    return this.http
      .get<ClientAPI[]>(`${this.urlApi}/${endpoint}`)
      .pipe(map((client) => ClientListTransfrom(client)));
  }
}

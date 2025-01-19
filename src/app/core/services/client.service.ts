import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BuildingAPI, ClientAPI } from '../models/Client.model';
import { map } from 'rxjs';
import { ClientTransform } from '../adapters/client.adapter';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private http = inject(HttpClient);
  private urlApi = environment.apiUrl

  constructor() { }

  getClientId(id_user:number){
    const endpoint = `Cliente/usuario/${id_user}`
    return this.http.get<ClientAPI>(`${this.urlApi}/${endpoint}`).pipe(
      map(client => ClientTransform(client))
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { faultListTransform, faultTypeTransform } from '../adapters/fault.adapter';
import { FaultAPI, FaultTypeAPI } from '../models/Fault';
import { ResponseAPI } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FaultService {
  private http = inject(HttpClient);
  private urlApi = environment.apiUrl;

  constructor() {}

  getFaulTypes() {
    const endpoint = `Averia/tipo-averias`;
    return this.http
      .get<FaultTypeAPI[]>(`${this.urlApi}/${endpoint}`)
      .pipe(map((types_api) => faultTypeTransform(types_api)));
  }

  getClientFaults(clientId: number){
    const endpoint = `Averia/cliente/${clientId}`
    return this.http.get<FaultAPI[]>(`${this.urlApi}/${endpoint}`).pipe(
      map(faults => faultListTransform(faults))
    )
  }

  getClientActiveFaults(clientId: number){
    const endpoint = `Averia/cliente/${clientId}/activas`
    return this.http.get<FaultAPI[]>(`${this.urlApi}/${endpoint}`).pipe(
      map(faults => faultListTransform(faults))
    ) 
  }

  postClientFault(form: FormData) {
    const endpoint = `Averia`;
    return this.http.post<ResponseAPI>(`${this.urlApi}/${endpoint}`, form);
  }
  
  postTechFault(form: FormData, averiaId: number) {
    const endpoint = `Averia/${averiaId}/cerrar`;
    return this.http.post<ResponseAPI>(`${this.urlApi}/${endpoint}`, form);
  }
}

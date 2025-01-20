import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PriorityListTransform,
  RequestListTransform,
} from '../adapters/request.adapter';
import {
  ServiceListTransform,
  ServiceTypeListTransform,
} from '../adapters/service.adapter';
import { PriorityAPI, RequestAPI, RequestForm } from '../models/request';
import { ServiceAPI, ServiceTypeAPI } from '../models/service';
import { ResponseAPI } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}

  getRequest() {
    const endpoint = `Solicitud`;
    return this.http
      .get<RequestAPI[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => RequestListTransform(data)));
  }

  getServiceTypes() {
    const endpoint = `Solicitud/tipo-servicios`;
    return this.http
      .get<ServiceTypeAPI[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => ServiceTypeListTransform(data)));
  }

  getServices() {
    const endpoint = `Solicitud/servicios`;
    return this.http
      .get<ServiceAPI[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => ServiceListTransform(data)));
  }

  getPriorities() {
    const endpoint = `Solicitud/prioridad`;
    return this.http
      .get<PriorityAPI[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => PriorityListTransform(data)));
  }

  postRequest(request: RequestForm) {
    const endpoint = `Solicitud`;
    return this.http.post<ResponseAPI>(`${this.apiUrl}/${endpoint}`, request);
  }
}

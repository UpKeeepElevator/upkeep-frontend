import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routeListTransform, routeTransform } from '../adapters/route.adapter';
import {
  Route,
  RouteAPI,
  RouteElevator,
  RouteElevatorAPI,
  RouteForm,
} from '../models/route';
import { ResponseAPI } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}

  getRoutes() {
    const endpoint = `Ruta`;
    return this.http
      .get<RouteAPI[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => routeListTransform(data)));
  }

  getRoute(routeId: string) {
    const endpoint = `Ruta/${routeId}`;
    return this.http
      .get<RouteAPI>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((data) => routeTransform(data)));
  }

  postRoute(newRoute: Route) {
    let request: RouteForm = {
      rutaId: newRoute.routeId,
      nombreRuta: newRoute.routeName,
    };

    const endpoint = `Ruta`;
    return this.http.post<ResponseAPI>(`${this.apiUrl}/${endpoint}`, request);
  }
  addElevatorToRoute(newElevator: RouteElevator) {
    let request: RouteElevatorAPI = {
      rutaId: newElevator.routeId,
      ascensorId: newElevator.elevatorId,
      fechaVisita: newElevator.visitDate,
      orden: newElevator.order,
    };

    const endpoint = `Ruta/${newElevator.routeId}/ascensor`;
    return this.http.post<ResponseAPI>(`${this.apiUrl}/${endpoint}`, request);
  }
}

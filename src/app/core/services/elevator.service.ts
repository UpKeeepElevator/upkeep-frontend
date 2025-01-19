import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ElevatorListTransform,
  ElevatorTransform,
} from '../adapters/elevator.adapter';
import { ElevatorAPI } from '../models/Elevator.model';

@Injectable({
  providedIn: 'root',
})
export class ElevatorService {
  private http = inject(HttpClient);
  private urlApi = environment.apiUrl;

  constructor() {}

  getBuildingElevator(buildindId: number) {
    const endpoint = `Ascensor/edificio/${buildindId}`;
    return this.http
      .get<ElevatorAPI[]>(`${this.urlApi}/${endpoint}`)
      .pipe(map((elevators) => ElevatorListTransform(elevators)));
  }

  getElevator(elevatorId: number) {
    const endpoint = `Ascensor/${elevatorId}`;
    return this.http
      .get<ElevatorAPI>(`${this.urlApi}/${endpoint}`)
      .pipe(map((elevator) => ElevatorTransform(elevator)));
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ElevatorAPI } from '../models/Elevator.model';
import { map } from 'rxjs';
import { ElevatorListTransform } from '../adapters/elevator.adapter';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  private http = inject(HttpClient)
  private urlApi = environment.apiUrl

  constructor() { }

  getBuildingElevator(buildindId: number){
    const endpoint = `Ascensor/edificio/${buildindId}`
    return this.http.get<ElevatorAPI[]>(`${this.urlApi}/${endpoint}`).pipe(
      map( elevators => ElevatorListTransform(elevators))
    )
  }
}

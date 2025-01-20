import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { faultListTransform } from '../adapters/fault.adapter';
import { JobTransform } from '../adapters/job.adapter';
import { UserListTransform } from '../adapters/user.adapter';
import { Elevator } from '../models/Elevator.model';
import { Fault, FaultAPI } from '../models/Fault';
import { JobApi } from '../models/job';
import { UserApi } from '../models/User';
import { fake_fault } from '../utils/fake_fault';
import { ElevatorService } from './elevator.service';

@Injectable({
  providedIn: 'root',
})
export class TechService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {
    this.SetActiveFault(
      localStorage.getItem(ACTIVE_FAULT_KEY)
        ? JSON.parse(localStorage.getItem(ACTIVE_FAULT_KEY) as string)
        : fake_fault
    );
  }

  public activeFault = signal<Fault>(fake_fault);
  public activeMaintenance = signal<Fault>(fake_fault);

  SetActiveFault(fault: Fault) {
    this.activeFault.set(fault);
    localStorage.setItem(ACTIVE_FAULT_KEY, JSON.stringify(fault));
  }

  private _elevatorService = inject(ElevatorService);
  private SetElevatorsRoute() {
    this._elevatorService.getElevators().subscribe({
      next: (data) => {
        localStorage.setItem(ELEVATOR_ROUTE_KEY, JSON.stringify(data));
      },
    });
  }

  NextElevator(elevatorId: number) {
    let actualData = this.GetTodayRoute();
    const target = actualData.filter((x) => x.id != elevatorId);
    if (target) {
      localStorage.setItem(ELEVATOR_ROUTE_KEY, JSON.stringify(target));
    }
  }

  GetTodayRoute() {
    let data = localStorage.getItem(ELEVATOR_ROUTE_KEY);
    if (data) {
      let elevators: Elevator[] = JSON.parse(data);
      return elevators;
    }
    return [];
  }

  //------------QUERIES
  GetJobsDone(tecnicoId: number) {
    const endpoint = `/Usuario/tecnico/${tecnicoId}/trabajos`;

    return this.http
      .get<JobApi[]>(`${this.apiUrl}${endpoint}`)
      .pipe(map((response) => JobTransform(response)));
  }

  GetPendingFaults(tecnicoId: number) {
    const endpoint = `/Averia/tecnico/${tecnicoId}/activas`;

    return this.http
      .get<FaultAPI[]>(`${this.apiUrl}${endpoint}`)
      .pipe(map((response) => faultListTransform(response)));
  }

  getTechnicians() {
    const endpoint = 'Usuario/tecnicos';
    return this.http
      .get<UserApi[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((users) => UserListTransform(users)));
  }
}

export const ACTIVE_FAULT_KEY = 'activeFault-technician';
export const ELEVATOR_ROUTE_KEY = 'elevator-route-technician';

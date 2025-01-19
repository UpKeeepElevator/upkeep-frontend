import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { faultListTransform } from '../adapters/fault.adapter';
import { JobTransform } from '../adapters/job.adapter';
import { Fault, FaultAPI } from '../models/Fault';
import { JobApi } from '../models/job';
import { fake_fault } from '../utils/fake_fault';

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

  SetActiveFault(fault: Fault) {
    this.activeFault.set(fault);
    localStorage.setItem(ACTIVE_FAULT_KEY, JSON.stringify(fault));
  }

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
}

export const ACTIVE_FAULT_KEY = 'activeFault-technician';

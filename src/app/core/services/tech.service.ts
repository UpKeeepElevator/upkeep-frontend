import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobTransform } from '../adapters/job.adapter';
import { JobApi } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class TechService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}

  GetJobsDone(tecnicoId: number) {
    const endpoint = `/Usuario/tecnico/${tecnicoId}/trabajos`;

    return this.http
      .get<JobApi[]>(`${this.apiUrl}${endpoint}`)
      .pipe(map((response) => JobTransform(response)));
  }
}

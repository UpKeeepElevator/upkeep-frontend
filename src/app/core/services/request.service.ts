import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}
}

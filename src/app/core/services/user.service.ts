import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  roleTransform,
  userAuthTransform,
  UserListTransform,
  userTransform,
} from '../adapters/user.adapter';
import { role, RoleApi, user, UserApi, userAuth } from '../models/User';
import { fake_role, fake_user } from '../utils/Fake_users';

export const TOKEN_KEY = 'token';
export const ROLES_KEY = 'roles';
export const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);

  public user = signal<user>(fake_user);
  public role = signal<role>(fake_role);

  constructor() {
    const userStorage = localStorage.getItem(USER_KEY);
    const rolesStorage = localStorage.getItem(ROLES_KEY);

    if (userStorage) {
      this.user.set(JSON.parse(userStorage));
    }

    if (rolesStorage) {
      const lstRoles: role[] = JSON.parse(rolesStorage);
      this.role.set(lstRoles[0]);
    }
  }

  verifyAuth() {
    const user = computed(() => this.user());
    const userData = user();
    return userData.id_user != 0;
  }

  authenticateUser(userInput: userAuth): Observable<boolean> {
    const user = userAuthTransform(userInput);

    return new Observable((obj) => {
      const endpoint = 'Usuario/auth';
      this.http
        .post<UserApi>(`${this.apiUrl}/${endpoint}`, user)
        .pipe(map((user) => userTransform(user)))
        .subscribe({
          next: (response) => {
            if (response.token)
              localStorage.setItem(TOKEN_KEY, JSON.stringify(response.token));
            localStorage.setItem(USER_KEY, JSON.stringify(response));
            this.user.set(response);
            if (response.role.length) {
              localStorage.setItem(ROLES_KEY, JSON.stringify(response.role));
              this.role.set(response.role[0]);
            }
            obj.next(true);
          },
          error: (error) => {
            obj.next(false);
          },
        });
    });
  }

  getUser() {
    return this.user();
  }

  getRole() {
    return this.role();
  }

  logout() {
    this.user.set(fake_user);
    this.role.set(fake_role);

    localStorage.clear();

    this.router.navigate(['/login']);
  }

  getUsers() {
    const endpoint = `Usuario`;
    return this.http
      .get<UserApi[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((faults) => UserListTransform(faults)));
  }

  getUserWithId(userId: number) {
    const endpoint = `Usuario/${userId}`;
    return this.http
      .get<UserApi>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((faults) => userTransform(faults)));
  }

  getRoles() {
    const endpoint = `Usuario/roles`;
    return this.http
      .get<RoleApi[]>(`${this.apiUrl}/${endpoint}`)
      .pipe(map((faults) => roleTransform(faults)));
  }

  postUser(newUser: any) {
    const endpoint = `Usuario/registrar`;
    return this.http
      .post<UserApi>(`${this.apiUrl}/${endpoint}`, newUser)
      .pipe(map((data) => userTransform(data)));
  }
}

export interface ResponseAPI {
  message: string;
  statusCode: number;
}

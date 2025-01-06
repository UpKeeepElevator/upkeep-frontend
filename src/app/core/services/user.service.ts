import { computed, inject, Injectable, signal } from '@angular/core';
import { role, user, UserApi, userAuth } from '../models/User';
import { fake_role, fake_user } from '../utils/Fake_users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { userAuthTransform, userTransform } from '../adapters/user.adapter';
import { TypeofExpression } from '@angular/compiler';
import { Router } from '@angular/router';

export const TOKEN_KEY = 'token'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl
  private http = inject(HttpClient)
  private router = inject(Router)

  public user = signal<user>(fake_user)
  public role = signal<role>(fake_role)

  constructor() { }

  verifyAuth(){
    const user = computed(() => this.user())
    const userData = user()
    return userData.id_user != 0
  }

  authenticateUser(userInput: userAuth):Observable<boolean>{
    const user = userAuthTransform(userInput)

    return new Observable((obj) => {
      const endpoint = 'Usuario/auth'
      this.http.post<UserApi>(`${this.apiUrl}/${endpoint}`, user).pipe( map( user => userTransform(user))).subscribe({
        next: (response) =>{
          if(response.token)
            localStorage.setItem(TOKEN_KEY, JSON.stringify(response.token))
          this.user.set(response)
          if(response.role.length){
            this.role.set(response.role[0])
          }
          obj.next(true)
        },
        error: (error) => {
          obj.next(false)
        }
      })
    }) 
  }

  getUser(){
    return this.user()
  }

  getRole(){
    return this.role()
  }

  logout(){
    this.user.set(fake_user)
    this.role.set(fake_role)

    localStorage.clear()

    this.router.navigate(['/login'])
  }
}

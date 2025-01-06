import { computed, Injectable, signal } from '@angular/core';
import { user } from '../models/User';
import { fake_user, USERS_LIST } from '../utils/Fake_users';

export const TOKEN_KEY = 'token'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = signal<user>(fake_user)

  constructor() { }

  verifyAuth(){
    const user = computed(() => this.user())
    const userData = user()
    return userData.cod_user != 0
  }

  authenticateUser(){
    const userData: user = USERS_LIST[1]
    this.user.set(userData)  
  }
}

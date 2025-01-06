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

  authenticateUser(userInput: user){
    const userData = USERS_LIST
    const userFind = userData.find(x => x.user === userInput.user)

    if(userFind && userFind.password === userInput.password){
      this.user.set(userFind)
      return true 
    }else{
      return false
    }
    // this.user.set(userData)  
  }

  getUser(){
    return this.user()
  }
}

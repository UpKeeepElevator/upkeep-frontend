import { Component, inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from 'src/app/core/models/User';
import { fake_user } from 'src/app/core/utils/Fake_users';
import { ToastService } from 'src/app/core/services/toast.service';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  private userService = inject(UserService)
  private toast  = inject(ToastService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private fb = inject(FormBuilder)
  

  protected loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  })

  get User(){
    const user = this.loginForm.get('user')?.value
    return user ? user : ''
  }

  get Password(){
    const password = this.loginForm.get('password')?.value
    return password ? password : ''   
  }

  constructor() { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if(url[0].path.includes('login'))
        this.loginForm.reset()
    })
  }

  login(){
    
    const user: user = {...fake_user, password: this.Password, user: this.User.toLowerCase() }
    const authenticated = this.userService.authenticateUser(user);

    if(authenticated){
      const userAuthenticated = this.userService.getUser()
      const role = userAuthenticated.role

      switch(role.cod_role){
        case 1:
          this.router.navigate(['/administrator'])
          break
        case 2:
          this.router.navigate(['/technician'])
          break
        case 3:
          this.router.navigate(['/client'])
      }
    }else{
      this.toast.toastError('Usuario o contraseña incorrecto', 'bottom')
    }
    // this.router.navigate(['/home'])
  } 
}

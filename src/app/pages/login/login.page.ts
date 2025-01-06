import { Component, inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { role, user, userAuth } from 'src/app/core/models/User';
import { fake_user } from 'src/app/core/utils/Fake_users';
import { ToastService } from 'src/app/core/services/toast.service';
import { IonContent, IonIcon } from "@ionic/angular/standalone";
import { FormInputComponent } from "../../shared/components/form-input/form-input.component";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, ReactiveFormsModule, FormInputComponent]
})
export class LoginPage implements OnInit {

  private userService = inject(UserService)
  private toast  = inject(ToastService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private fb = inject(FormBuilder)
  

  protected loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.email]],
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
      if(url[0].path.includes('login')){
        this.loginForm.reset()
        localStorage.clear()
      }
    })

    addIcons({
      star: '/assets/icon/star.svg'
    })
  }

  login(){
    
    const user: userAuth = {
      user: this.User,
      password: this.Password
    }
    
    this.userService.authenticateUser(user).subscribe(response => {
      if(response){
        const role = this.userService.getRole()
        
        switch(role.id_role){
          case 2:
            this.router.navigate(['/administrator'])
            break
          case 1:
            this.router.navigate(['/technician'])
            break
          case 3:
            this.router.navigate(['/client'])
            break;
          default:
            this.router.navigate(['/technician'])
            break
        }
      }else{
        this.toast.toastError('Usuario o contraseña incorrecto', 'bottom')
      }
    })
    // this.router.navigate(['/home'])
  }
  
  passwordRecovery(){
    // console.log('hola')
    this.router.navigate(['/password-recovery'])

  }
}

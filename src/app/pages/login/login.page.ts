import { Component, inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: []
})
export class LoginPage implements OnInit {

  private userService = inject(UserService)
  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.userService.authenticateUser();
    // this.router.navigate(['/home'])
  } 

}

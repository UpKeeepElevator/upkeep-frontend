import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-agregar-usuario',
  templateUrl: './form-agregar-usuario.component.html',
  styleUrls: ['./form-agregar-usuario.component.scss'],
})
export class FormAgregarUsuarioComponent  implements OnInit {

  user = {
    role: '',
    email: '',
    password: '',
    fullName: '',
    phone: '',
    confirmPassword: '',
  };     
  constructor() { }

  ngOnInit() {}

}

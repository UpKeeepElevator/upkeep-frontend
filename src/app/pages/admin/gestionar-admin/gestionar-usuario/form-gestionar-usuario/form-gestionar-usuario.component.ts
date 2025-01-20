import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-gestionar-usuario',
  templateUrl: './form-gestionar-usuario.component.html',
  styleUrls: ['./form-gestionar-usuario.component.scss'],
})
export class FormGestionarUsuarioComponent  implements OnInit {
  user = {
    role: 'Tecnico',
    email: 'Tecnico@correo.com',
    password: 'XXXXXXXX',
    fullName: 'Juan Antonio Silverio',
    phone: '809-xxx-xxxx',
    confirmPassword: 'XXXXXXXX',
  };     
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {}

}

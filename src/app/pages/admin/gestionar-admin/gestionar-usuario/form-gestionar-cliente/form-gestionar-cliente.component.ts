import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-gestionar-cliente',
  templateUrl: './form-gestionar-cliente.component.html',
  styleUrls: ['./form-gestionar-cliente.component.scss'],
})
export class FormGestionarClienteComponent  implements OnInit {
  user = {
    role: 'Tecnico',
    fullName: 'Juan Antonio Silverio',
    phone: '809-xxx-xxxx',
    contacName: 'Juancito',
  };     
  constructor() { }

  ngOnInit() {}

}

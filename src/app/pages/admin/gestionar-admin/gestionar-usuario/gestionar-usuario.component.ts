import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface User {
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  role: string;
  passwordAccess: 'Ver' | 'Sin acceso';
}

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class GestionarUsuarioComponent implements OnInit {
  users: User[] = [
    { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', role: 'Tecnico', passwordAccess: 'Ver' },
    { name: 'Anika Rhel Madsen', email: 'example@email.com', status: 'Active', role: 'Cliente', passwordAccess: 'Ver' },
    // Añade más usuarios si es necesario
  ];
  constructor(private router: Router) {}
  onFilter(): void {
    console.log('Filter clicked');
  }

  onSearch(term: string): void {
    console.log('Search term:', term);
  }

  ngOnInit() {

  }

  getRoleRoute(role: string): string {
    if (role === 'Tecnico') {
      return 'gestionar-usuario';
    } else if (role === 'Cliente') {
      return 'gestionar-cliente';
    }
    return '/'; // Ruta por defecto o error
  }

}


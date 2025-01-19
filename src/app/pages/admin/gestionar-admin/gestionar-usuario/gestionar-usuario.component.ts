import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imports: [CommonModule]
})
export class GestionarUsuarioComponent {
  users: User[] = [
    { name: 'Justin Septimus', email: 'example@email.com', status: 'Active', role: 'Tecnico', passwordAccess: 'Ver' },
    { name: 'Anika Rhel Madsen', email: 'example@email.com', status: 'Active', role: 'Tecnico', passwordAccess: 'Ver' },
    // Añade más usuarios si es necesario
  ];

  onFilter(): void {
    console.log('Filter clicked');
  }

  onSearch(term: string): void {
    console.log('Search term:', term);
  }

  onNuevoCliente(): void {
    console.log('Nuevo cliente clicked');
  }

  onNuevoTecnico(): void {
    console.log('Nuevo tecnico clicked');
  }
}


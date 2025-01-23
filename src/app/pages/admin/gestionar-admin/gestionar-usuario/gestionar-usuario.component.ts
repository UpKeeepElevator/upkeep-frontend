import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { user } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class GestionarUsuarioComponent implements OnInit {
  users: user[] = [];

  private _userService = inject(UserService);

  constructor(private router: Router) {}
  onFilter(): void {
    console.log('Filter clicked');
  }

  onSearch(term: string): void {
    console.log('Search term:', term);
  }

  ngOnInit() {
    this._userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
    });
  }

  getRoleRoute(role: string): string {
    if (role === 'Tecnico') {
      return 'gestionar-usuario';
    } else if (role === 'Cliente') {
      return 'gestionar-cliente';
    }
    return '/';
  }
}

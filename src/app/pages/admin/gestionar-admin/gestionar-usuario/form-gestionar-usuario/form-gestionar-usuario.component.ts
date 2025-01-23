import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { fake_user } from 'src/app/core/utils/Fake_users';

@Component({
  selector: 'app-form-gestionar-usuario',
  templateUrl: './form-gestionar-usuario.component.html',
  styleUrls: ['./form-gestionar-usuario.component.scss'],
})
export class FormGestionarUsuarioComponent implements OnInit {
  user: user = fake_user;

  private _userService = inject(UserService);
  private _activatedRoute = inject(ActivatedRoute);

  usuarioId: number = 0;

  constructor(private location: Location) {
    this._activatedRoute.queryParams.subscribe((params) => {
      let id = params['usuario_id'];
      if (id) {
        this.usuarioId = id;
      }
    });
  }

  GetUser() {
    this._userService.getUserWithId(this.usuarioId).subscribe({
      next: (data) => {
        this.user = data;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {}
}

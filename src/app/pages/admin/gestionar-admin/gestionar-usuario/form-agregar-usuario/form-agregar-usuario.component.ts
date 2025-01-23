import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { role, RoleApi, user } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';
import { fake_user } from 'src/app/core/utils/Fake_users';
@Component({
  selector: 'app-form-agregar-usuario',
  templateUrl: './form-agregar-usuario.component.html',
  styleUrls: ['./form-agregar-usuario.component.scss'],
  imports: [ReactiveFormsModule],
})
export class FormAgregarUsuarioComponent implements OnInit {
  user: user = fake_user;

  private fb = inject(FormBuilder);
  private _userService = inject(UserService);
  private _router = inject(Router);

  protected reportForm = this.fb.group({
    confirm_password: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
  });

  private get Role() {
    const buildId = this.reportForm.get('role')?.value;
    return buildId ? Number(buildId) : 0;
  }

  private get Password() {
    return this.reportForm.get('password')?.value ?? '';
  }
  private get Email() {
    return this.reportForm.get('email')?.value ?? '';
  }
  private get Name() {
    return this.reportForm.get('name')?.value ?? '';
  }
  private get Phone() {
    return this.reportForm.get('phone')?.value ?? '';
  }

  constructor(private location: Location) {}

  roles: role[] = [];
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this._userService
      .getRoles()
      .subscribe({ next: (data) => (this.roles = data) });
  }

  sendForm() {
    const roleSelected = this.roles.find((x) => x.id_role == this.Role);

    let userRoles: RoleApi[] = [
      {
        rolId: roleSelected?.id_role ?? 0,
        rolDescripcion: roleSelected?.name_role ?? '',
      },
    ];

    let newUser = {
      cuenta: this.Email,
      contrasena: this.Password,
      nombres: this.Name,
      telefono: this.Phone,
      roles: userRoles,
    };

    this._userService.postUser(newUser).subscribe({
      next: (response) => {
        console.log(response);

        this._router.navigate(['/administrator/gestionar/usuario']);
      },
    });
  }
}

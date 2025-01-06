import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {  IonIcon } from '@ionic/angular/standalone';
import { ToastService } from 'src/app/core/services/toast.service';
import { FormInputComponent } from 'src/app/shared/components/form-input/form-input.component';
import { addIcons } from 'ionicons';
import { startWith } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonIcon, FormInputComponent, RouterLink]
})
export class PasswordRecoveryPage {
  private fb = inject(FormBuilder)
  private toast = inject(ToastService)

  protected recoveryForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  })

  constructor(){
    addIcons({
      star: '/assets/icon/star.svg'
    })
  }

  get Email(){
    const email = this.recoveryForm.get('email')?.value
    return email ? email : ''
  }

  submitForm(){
    this.toast.toastSuccess('Enviando Formulario', 'bottom')
    //todo llamar al endpoint de recuperacion de contraseña
  }

  

}

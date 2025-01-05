import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone'

type toastPosition = 'top'|'bottom'|'middle'

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toast = inject(ToastController)

  constructor() { }

  async toastSuccess(message: string, position:toastPosition){
    const toast = await this._toast.create({
      message: message,
      position: position,
      cssClass: 'success',
      duration: 2000
    })

    await  toast.present();
  }

  async toastError(message: string, position:toastPosition){
    const toast = await this._toast.create({
      message: message,
      position: position,
      cssClass: 'danger',
      duration: 2000
    })

    await  toast.present();

  }

  async toastWarning(message: string, position:toastPosition){
    const toast = await this._toast.create({
      message: message,
      position: position,
      cssClass: 'warning',
      duration: 2000
    })

    await  toast.present();
  }
}


import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-add-service-request-modal',
  templateUrl: './add-service-request-modal.component.html',
  styleUrls: ['./add-service-request-modal.component.scss'],
  imports: [ReactiveFormsModule, IonIcon, FormInputComponent],
})
export class AddServiceRequestModalComponent implements OnInit {
  private _modal = inject(ModalController);
  private fb = inject(FormBuilder);

  protected reportForm = this.fb.group({
    section: ['', Validators.required],
    error: ['', Validators.required],
    solution: ['', Validators.required],
    evidences: this.fb.array([], Validators.required),
  });

  private get section() {
    const elevatorId = this.reportForm.get('section')?.value;
    return elevatorId ? Number(elevatorId) : 0;
  }

  constructor() {
    addIcons({
      close: '/assets/icon/close-white.svg',
      alert: '/assets/icon/alert.svg',
    });
  }

  ngOnInit() {}

  sendForm() {
    //todo call service and send the report 😊

    const date = new Date().toISOString();
    let formData = new FormData();

    formData.append('SeccionAveria', this.section.toString());
    // formData.append('ErrorEncontrado', this.Error.toString());
    // formData.append('ReparacionRealizada', this.Solution);
    // this.file.forEach((file) => {
    //   formData.append('Anexos', file);
    // });
    //Metdata
    formData.append('FechaRespuesta', date);
    // formData.append('AveriaId', this.activeFault.faultId.toString());
    // formData.append('TecnicoId', this.user().id_user.toString());
    formData.append('Geolocalizacion', '0,0');

    // this.faultService
    //   .postTechFault(formData, this.activeFault.faultId)
    //   .subscribe({
    //     next: (response) => {
    //       this.closeModal();
    //       this.router.navigate(['/client/success']);
    //     },
    //     error: (error) => console.log(error),
    //   });
  }

  closeModal() {
    this._modal.dismiss();
  }
}

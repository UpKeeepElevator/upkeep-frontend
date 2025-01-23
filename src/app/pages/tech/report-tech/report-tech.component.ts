import { Component, computed, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';
import { Elevator } from 'src/app/core/models/Elevator.model';
import { Fault } from 'src/app/core/models/Fault';
import { ElevatorService } from 'src/app/core/services/elevator.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { fake_elevator } from 'src/app/core/utils/fake_elevator';
import { fake_fault } from 'src/app/core/utils/fake_fault';
import { FormTextareaComponent } from 'src/app/shared/components/form-textarea/form-textarea.component';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-report-tech',
  templateUrl: './report-tech.component.html',
  styleUrls: ['./report-tech.component.scss'],
  imports: [
    SidebarButtonComponent,
    HomeButtonComponent,
    ReactiveFormsModule,
    IonIcon,
    FormTextareaComponent,
  ],
})
export class ReportTechComponent implements OnInit {
  private fb = inject(FormBuilder);
  private faultService = inject(FaultService);
  private userService = inject(UserService);
  private elevatorService = inject(ElevatorService);
  private techService = inject(TechService);
  private _modal = inject(ModalController);
  private router = inject(Router);
  private user = computed(() => this.userService.user());

  protected file: File[] | undefined;
  protected reportForm = this.fb.group({
    section: ['', Validators.required],
    error: ['', Validators.required],
    solution: ['', Validators.required],
    evidences: this.fb.array([], Validators.required),
  });

  protected activeFault: Fault = fake_fault;

  protected elevator: Elevator = fake_elevator;

  private get section() {
    const elevatorId = this.reportForm.get('section')?.value;
    return elevatorId ? Number(elevatorId) : 0;
  }

  private get Solution() {
    const decription = this.reportForm.get('solution')?.value;
    return decription ? decription : '';
  }
  private get Error() {
    const error = this.reportForm.get('error')?.value;
    return error ? error : '';
  }

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      arrowForward,
      upload: '/assets/icon/upload.svg',
    });
  }

  ngOnInit() {
    this.getElevatorSections();
  }

  getElevatorSections() {
    //TODO: GetElevator

    this.activeFault = this.techService.activeFault();

    this.elevatorService.getElevator(this.activeFault.elevatorId).subscribe({
      next: (response) => {
        this.elevator = response;
        //TODO: quitar log de ascensor
        console.error(this.elevator);
      },
    });

    this.faultService.getFaulTypes().subscribe({
      next: (response) => {},
    });
  }

  getElevators() {
    // this.elevatorService.getBuildingElevator(id).subscribe({
    //   next: (response) => {
    //     this.elevators = response;
    //   },
    // });
  }

  selectPicture(e: any) {
    if (!this.file) this.file = [];
    var temp = e.target.files[0];
    this.file.push(temp);

    this.reportForm.controls.evidences.push(this.fb.control(temp)); // console.log(this.file)
    // if (this.file) this.reportForm.controls.picture.setValue(this.file.name);
  }

  sendForm() {
    //todo call service and send the report 😊
    if (this.file) {
      const date = new Date().toISOString();
      let formData = new FormData();
      console.log(this.Solution);
      formData.append('SeccionAveria', this.section.toString());
      formData.append('ErrorEncontrado', this.Error.toString());
      formData.append('ReparacionRealizada', this.Solution);
      this.file.forEach((file) => {
        formData.append('Anexos', file);
      });
      //Metdata
      formData.append('FechaRespuesta', date);
      formData.append('AveriaId', this.activeFault.faultId.toString());
      formData.append('TecnicoId', this.user().id_user.toString());
      formData.append('Geolocalizacion', '0,0');

      this.faultService
        .postTechFault(formData, this.activeFault.faultId)
        .subscribe({
          next: (response) => {
            this.closeModal();
            this.router.navigate(['/technician/success']);
            this.techService.SetActiveFault(fake_fault);
          },
          error: (error) => console.log(error),
        });
    }
  }

  closeModal() {
    this._modal.dismiss();
  }
}

import { Component, computed, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';
import { Client } from 'src/app/core/models/Client.model';
import { Elevator } from 'src/app/core/models/Elevator.model';
import { FaultType } from 'src/app/core/models/Fault';
import { ClientService } from 'src/app/core/services/client.service';
import { ElevatorService } from 'src/app/core/services/elevator.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { UserService } from 'src/app/core/services/user.service';
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
  private clientService = inject(ClientService);
  private elevatorService = inject(ElevatorService);
  private _modal = inject(ModalController);
  private router = inject(Router);
  private selectedFault: FaultType | undefined;
  private user = computed(() => this.userService.user());
  private client: Client | undefined;

  protected file: File[] | undefined;
  protected reportForm = this.fb.group({
    section: ['', Validators.required],
    error: ['', Validators.required],
    solution: ['', Validators.required],
    evidences: this.fb.array([], Validators.required),
  });

  protected faultTypes: FaultType[] = [];
  protected elevators: Elevator[] = [];

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
    this.getFaulTypes();
    this.getClient();
  }

  getFaulTypes() {
    this.faultService.getFaulTypes().subscribe({
      next: (response) => {
        this.faultTypes = response;
      },
    });
  }

  getClient() {
    this.clientService.getClientId(this.user().id_user).subscribe({
      next: (response) => {
        this.client = response;
        // if (this.client && this.client.buildings.length)
        //   this.buildings = this.client.buildings;
      },
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

  selectedStyle(fault: FaultType) {
    let style = '';
    if (fault.id === this.selectedFault?.id) {
      style = 'size-4 bg-golden-bell-600 rounded';
    } else {
      style = 'size-4 border border-solid border-golden-bell-600 rounded';
    }
    return style;
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
      formData.append('AveriaId', '');
      formData.append('TecnicoId', this.user().id_user.toString());

      this.faultService.postClientFault(formData).subscribe({
        next: (response) => {
          this.closeModal();
          this.router.navigate(['/client/success']);
        },
        error: (error) => console.log(error),
      });
    }
  }

  closeModal() {
    this._modal.dismiss();
  }
}

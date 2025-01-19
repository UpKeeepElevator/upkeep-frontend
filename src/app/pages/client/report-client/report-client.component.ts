import { Component, computed, inject, OnInit } from '@angular/core';
import { FormTextareaComponent } from "../../../shared/components/form-textarea/form-textarea.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';
import { FaultService } from 'src/app/core/services/fault.service';
import { FaultType } from 'src/app/core/models/Fault';
import { UserService } from 'src/app/core/services/user.service';
import { ClientService } from 'src/app/core/services/client.service';
import { user } from 'src/app/core/models/User';
import { Client } from 'src/app/core/models/Client.model';

@Component({
  selector: 'app-report-client',
  templateUrl: './report-client.component.html',
  styleUrls: ['./report-client.component.scss'],
  imports: [FormTextareaComponent, ReactiveFormsModule, IonIcon],
})
export class ReportClientComponent  implements OnInit {
  private fb = inject(FormBuilder)
  private faultService = inject(FaultService)
  private userService = inject(UserService)
  private clientService = inject(ClientService)
  private selectedFault: FaultType | undefined;
  private user = computed(() => this.userService.user())
  private client: Client | undefined
  
  protected file: File | undefined
  protected reportForm = this.fb.group({
    fault: ['',Validators.required],
    description: ['', Validators.required],
    picture: ['', Validators.required]
  })
  protected faultTypes: FaultType[] = []
  
  private get Fautl(){
    const id = this.selectedFault ? this.selectedFault.id : 0
    return id
  }

  private get Desciption(){
    const decription = this.reportForm.get('desciption')?.value
    return decription ? decription: ''
  }
  
  private get Picture(){
    const id = this.selectedFault ? this.selectedFault.id : 0
    return id
  }

  constructor() {
    addIcons({
      arrowForward,
      uploadClient: '/assets/icon/upload-client.svg'
    })
  }

  ngOnInit() {
    this.getFaulTypes()
    this.getClient()
  }

  getFaulTypes(){
    this.faultService.getFaulTypes().subscribe({
      next: (response) =>{
        this.faultTypes = response
      }
    })
  }

  getClient(){
    this.clientService.getClientId(this.user().id_user).subscribe({
      next: response => {
        this.client = response
      }
    })
  }

  selectFault(fault: FaultType){
    this.selectedFault = fault
    this.reportForm.controls.fault.setValue(fault.name)
  }

  selectPicture(e: any){
    this.file = e.target.files[0]
    // console.log(this.file)
    if(this.file) 
    this.reportForm.controls.picture.setValue(this.file.name)
  }

   selectedStyle(fault: FaultType){
    let style = ''
    if(fault.id === this.selectedFault?.id){
      style = 'size-4 bg-golden-bell-600 rounded'
    }else{
      style = 'size-4 border border-solid border-golden-bell-600 rounded'
    }
    return style
   }

   sendForm(){
    //todo call service and send the report 😊
    console.log('Subiendo formulario')
   }

}

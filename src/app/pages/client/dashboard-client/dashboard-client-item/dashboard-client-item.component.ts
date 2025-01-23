import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/Client.model';
import { Fault } from 'src/app/core/models/Fault';
import { ClientService } from 'src/app/core/services/client.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { UserService } from 'src/app/core/services/user.service';
import { IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TechService } from 'src/app/core/services/tech.service';
import { user } from 'src/app/core/models/User';

@Component({
  selector: 'app-dashboard-client-item',
  templateUrl: './dashboard-client-item.component.html',
  styleUrls: ['./dashboard-client-item.component.scss'],
  imports: [IonIcon, DatePipe, RouterLink]
})
export class DashboardClientItemComponent  implements OnInit {
  help = input<boolean>()
  report = input<boolean>()

  private userService = inject(UserService)
  private faultService = inject(FaultService)
  private clientService = inject(ClientService)
  private techService = inject(TechService)
  private datePipe = new DatePipe('es')
  private user = this.userService.getUser()

  protected faultList: Fault[] = []
  protected activeFaults: Fault[] = []
  protected technicians: user[] = []
  protected techFilter: user[] = []
  protected daysLastReport = 0
  protected client: Client| undefined


  constructor() {
    addIcons({
      actionClient: 'assets/icon/action-client.svg',
      starGreen: 'assets/icon/star-full-green.svg'
    })
  }

  ngOnInit() {
    this.getClientId()
  }

  getClientId(){
    this.clientService.getClientId(this.user.id_user).subscribe({
      next: response => {
        this.client = response
        this.getFaultList()
        
      },
      error: error => console.error(error)
    })
  }

  getFaultList(){
    if(!this.client) return

    this.faultService.getClientFaults(this.client.id).subscribe({
      next: response => {
        this.faultList = response
        this.getTechnicians()
        this.getActiveFaults()
      },
      error: error => console.error(error)
    })
  }

  getActiveFaults(){
    if(!this.client) return
    this.faultService.getClientActiveFaults(this.client.id).subscribe({
      next: response =>{
        this.activeFaults = response
        if(!this.activeFaults.length) this.getDaysLastReport()
      },
      error: error => console.error(error)
    })
  }

  getTechnicians(){
    this.techService.getTechnicians().subscribe({
      next: respone =>{
        this.technicians = respone
        const uniqueTech = this.faultList.filter((value, index, self) =>
          self.findIndex(x => x.technicianId === value.technicianId) === index
        )
        this.techFilter = this.technicians.filter(tech => uniqueTech.some(x => x.technicianId === tech.id_user))
      }
    })
  }

  getDaysLastReport(){
    if(!this.faultList.length) return
    
    const lastFault: Fault = this.faultList[0]
    const dateNow  = new Date().getTime()
    const dateLastFault = new Date(lastFault.reporteDate).getTime()

    const result = (dateNow - dateLastFault) / 86400000
    this.daysLastReport= Math.floor(result)
    console.log(this.daysLastReport)
  }

  responseDate(date: string | undefined): string{
    if(!date) return 'aún no has sido respondido'
    const dateTrasnform = this.datePipe.transform(date, 'dd/MM/yyyy')
    const message = `fue resuleto el ${dateTrasnform}`
    return message
  }

}

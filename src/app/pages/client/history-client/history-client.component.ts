import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/Client.model';
import { Fault, FaultType } from 'src/app/core/models/Fault';
import { user } from 'src/app/core/models/User';
import { ClientService } from 'src/app/core/services/client.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { HomeButtonComponent } from 'src/app/shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from 'src/app/shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-history-client',
  templateUrl: './history-client.component.html',
  styleUrls: ['./history-client.component.scss'],
  imports: [HomeButtonComponent, SidebarButtonComponent, DatePipe]
})
export class HistoryClientComponent  implements OnInit {
  private userService = inject(UserService)
  private clientService = inject(ClientService)
  private faultService = inject(FaultService)
  private techService = inject(TechService)
  private user = computed(() => this.userService.user())
  private client: Client | undefined
  private technicians: user[] = []
  private faultTypes: FaultType[] = []


  protected faultList: Fault[] = []
  
  constructor() { }

  ngOnInit() {
    this.getClient()
    this.getTechnicians()
    this.getFaulTypes()
  }

  getFaulTypes(){
    this.faultService.getFaulTypes().subscribe({
      next: response => {
        this.faultTypes = response
      },
      error: error => console.error(error)
    })
  }

  getClient(){
    this.clientService.getClientId(this.user().id_user).subscribe({
      next: response => {
        this.client = response
        this.getClientFaults()
      },
      error: error => console.error(error)
    })
  }

  getClientFaults(){
    if(!this.client) return
    this.faultService.getClientFaults(this.client.id).subscribe({
      next: response => {
        this.faultList = response
      },
      error: error => console.error(error)
    })
  }

  getTechnicians(){
    this.techService.getTechnicians().subscribe({
      next: response => {
        this.technicians = response
      },
      error: error => console.error(error)
    })
  }

  techName(techId: number | undefined): string{
    if(!techId) return 'no encontrado'
    const technician = this.technicians.find(tech => tech.id_user === techId)
    return technician ? technician.name_user : 'no encontrado'
  }

  faultName(faultId: number){
    const faultType = this.faultTypes.find(fault => fault.id === faultId)
    return faultType ? faultType.name : 'no encontrado'
  }

}

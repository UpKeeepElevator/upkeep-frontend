import { Component, computed, inject, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/Client.model';
import { Fault } from 'src/app/core/models/Fault';
import { ClientService } from 'src/app/core/services/client.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { UserService } from 'src/app/core/services/user.service';
import { IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-client-item',
  templateUrl: './dashboard-client-item.component.html',
  styleUrls: ['./dashboard-client-item.component.scss'],
  imports: [IonIcon, DatePipe, RouterLink]
})
export class DashboardClientItemComponent  implements OnInit {
  private userService = inject(UserService)
  private faultService = inject(FaultService)
  private clientService = inject(ClientService)
  private datePipe = new DatePipe('es')
  private user = this.userService.getUser()

  protected faultList: Fault[] = []
  protected client: Client| undefined


  constructor() {
    addIcons({
      actionClient: 'assets/icon/action-client.svg'
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
      },
      error: error => console.error(error)
    })
  }

  responseDate(date: string | undefined): string{
    if(!date) return 'aún no has sido respondido'
    const dateTrasnform = this.datePipe.transform(date, 'dd/MM/yyyy')
    const message = `fue resuleto el ${dateTrasnform}`
    return message
  }

}

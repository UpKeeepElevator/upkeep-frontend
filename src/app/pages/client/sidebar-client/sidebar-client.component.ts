import { Component, inject, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { SidebarNavButtonComponent } from "../../../shared/components/sidebar-nav-button/sidebar-nav-button.component";
import { ModalController } from '@ionic/angular/standalone'
import { ReportClientComponent } from '../report-client/report-client.component';
@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.scss'],
  imports: [SidebarNavButtonComponent],
})
export class SidebarClientComponent  implements OnInit {
  @Input() currentRoute = ''
  private userService = inject(UserService)
  private _modal = inject(ModalController)
  

  constructor() { }

  ngOnInit() {
    console.log(this.currentRoute)
  }

  async openReport(){
    this.closeModal()
    const modalReport = await this._modal.create({
      component: ReportClientComponent,
      breakpoints: [0.5, 0.8],
      initialBreakpoint: 0.8,
      cssClass: 'modal-report',
    });
    
    await modalReport.present();

  }

  closeModal(){
    this._modal.dismiss();
  }

  logout(){
    this.userService.logout();
    this.closeModal();
  }

}

export interface ButtonMap {
  name: string;
  route: string;
  icon: string ;
}



import { Component, inject, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { SidebarNavButtonComponent } from "../../../shared/components/sidebar-nav-button/sidebar-nav-button.component";
import { ModalController } from '@ionic/angular/standalone'
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



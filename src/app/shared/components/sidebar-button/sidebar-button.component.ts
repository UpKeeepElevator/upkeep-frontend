import { Component, inject, input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { SidebarClientComponent } from 'src/app/pages/client/sidebar-client/sidebar-client.component';
import { SidebarTechComponent } from 'src/app/pages/tech/sidebar-tech/sidebar-tech.component';
import { ModalController, IonIcon } from '@ionic/angular/standalone'

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss'],
  imports: [IonIcon]
})
export class SidebarButtonComponent {

  type = input.required<'client' | 'tech'>()
  
    private _modal = inject(ModalController)
  
    constructor() {
      addIcons({
        client: '/assets/icon/menu-client.svg',
        tech: '/assets/icon/menu.svg'
      })
    }
  
    async openSidebar(){
      if(this.type() === 'client'){
        const modalSide = await this._modal.create({
          component: SidebarClientComponent,
          cssClass: 'sidebar'
        })
        await modalSide.present()
      }else{
        const modalSide = await this._modal.create({
          component: SidebarTechComponent,
          cssClass: 'sidebar'
        })
        await modalSide.present()
      }
    }
  

}

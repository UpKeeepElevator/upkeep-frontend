import { Component, inject, input, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { SidebarClientComponent } from 'src/app/pages/client/sidebar-client/sidebar-client.component';
import { SidebarTechComponent } from 'src/app/pages/tech/sidebar-tech/sidebar-tech.component';
import { ModalController, IonIcon, AnimationController } from '@ionic/angular/standalone'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss'],
  imports: [IonIcon]
})
export class SidebarButtonComponent {

  type = input.required<'client' | 'tech'>()
  
  private _modal = inject(ModalController)
  private routes = inject(ActivatedRoute)
  private animation = inject(AnimationController)
  private currentRoute = ''
  private enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animation
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animation
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translate(-500px)' },
        { offset: 1, opacity: '0.99', transform: 'translate(0)' },
      ]);

    return this.animation
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  private leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  constructor() {
    addIcons({
      client: '/assets/icon/menu-client.svg',
      tech: '/assets/icon/menu.svg'
    })
    this.routes.url.subscribe(url => {
      if(url.length > 0)
        this.currentRoute = url[0].path
    })
  }
  
  async openSidebar(){
    if(this.type() === 'client'){
      const modalSide = await this._modal.create({
        component: SidebarClientComponent,
        cssClass: 'sidebar',
        backdropDismiss:true,
        animated: true,
        enterAnimation: this.enterAnimation,
        leaveAnimation: this.leaveAnimation,
        componentProps: {
          currentRoute: this.currentRoute
        }
      })
      await modalSide.present()
    }else{
      const modalSide = await this._modal.create({
        component: SidebarTechComponent,
        cssClass: 'sidebar',
        backdropDismiss:true,
        animated: true,
        enterAnimation: this.enterAnimation,
        leaveAnimation: this.leaveAnimation,
        componentProps: {
          currentRoute: this.currentRoute
        }
      })
      await modalSide.present()
    }
  }
  

}

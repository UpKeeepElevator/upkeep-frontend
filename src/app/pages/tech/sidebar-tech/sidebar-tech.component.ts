import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { UserService } from 'src/app/core/services/user.service';
import { SidebarNavButtonComponent } from '../../../shared/components/sidebar-nav-button/sidebar-nav-button.component';
import { RouteTechComponent } from '../route-tech/route-tech.component';

@Component({
  selector: 'app-sidebar-tech',
  templateUrl: './sidebar-tech.component.html',
  styleUrls: ['./sidebar-tech.component.scss'],
  imports: [SidebarNavButtonComponent],
})
export class SidebarTechComponent implements OnInit {
  @Input() currentRoute = '';
  private userService = inject(UserService);
  private _modal = inject(ModalController);

  constructor() {}

  ngOnInit() {
    console.log(this.currentRoute);
  }

  closeModal() {
    this._modal.dismiss();
  }

  async OpenRoute() {
    this.closeModal();
    const modalReport = await this._modal.create({
      component: RouteTechComponent,
      breakpoints: [0.5, 0.8],
      initialBreakpoint: 0.8,
      cssClass: 'modal-report',
    });

    await modalReport.present();
  }

  logout() {
    this.userService.logout();
    this.closeModal();
  }
}

import { Component, computed, inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { HomeButtonComponent } from 'src/app/shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from 'src/app/shared/components/sidebar-button/sidebar-button.component';
import { DashboardClientItemComponent } from "./dashboard-client-item/dashboard-client-item.component";

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent, DashboardClientItemComponent]
})
export class DashboardClientComponent  implements OnInit {
  private userService = inject(UserService)
 
  protected user = computed(() => this.userService.user())

  constructor() { }

  ngOnInit() {}

}

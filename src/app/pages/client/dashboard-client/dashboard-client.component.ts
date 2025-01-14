import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from 'src/app/shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from 'src/app/shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent]
})
export class DashboardClientComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

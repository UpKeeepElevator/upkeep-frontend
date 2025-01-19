import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-dashboard-tech',
  templateUrl: './dashboard-tech.component.html',
  styleUrls: ['./dashboard-tech.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent],
})
export class DashboardTechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

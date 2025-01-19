import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-report-tech',
  templateUrl: './report-tech.component.html',
  styleUrls: ['./report-tech.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent],
})
export class ReportTechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-history-tech',
  templateUrl: './history-tech.component.html',
  styleUrls: ['./history-tech.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent],
})
export class HistoryTechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

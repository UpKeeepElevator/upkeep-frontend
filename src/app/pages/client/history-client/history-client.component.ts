import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from 'src/app/shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from 'src/app/shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-history-client',
  templateUrl: './history-client.component.html',
  styleUrls: ['./history-client.component.scss'],
  imports: [HomeButtonComponent, SidebarButtonComponent]
})
export class HistoryClientComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

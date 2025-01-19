import { Component, OnInit } from '@angular/core';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent],
})
export class SolicitarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

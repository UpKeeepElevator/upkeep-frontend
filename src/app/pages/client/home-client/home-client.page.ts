import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { SidebarButtonComponent } from "../../../shared/components/sidebar-button/sidebar-button.component";
import { HomeButtonComponent } from "../../../shared/components/home-button/home-button.component";

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
  standalone: true,
  imports: [RouterOutlet, SidebarButtonComponent, HomeButtonComponent]
})
export class HomeClientPage implements OnInit {


  constructor() {}

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, RouterOutlet],
})
export class HomeAdminPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

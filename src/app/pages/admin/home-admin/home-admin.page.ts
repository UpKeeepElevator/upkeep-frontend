import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, RouterOutlet]
})
export class HomeAdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

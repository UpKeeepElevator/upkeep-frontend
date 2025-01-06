import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home-tech',
  templateUrl: './home-tech.page.html',
  styleUrls: ['./home-tech.page.scss'],
  standalone: true,
  imports: [IonIcon, RouterOutlet]
})
export class HomeTechPage implements OnInit {

  constructor() {
    addIcons({
      menu: '/assets/icon/menu.svg',
      home: '/assets/icon/imagotipo.svg'
    })
  }

  ngOnInit(): void {
    
  }

}

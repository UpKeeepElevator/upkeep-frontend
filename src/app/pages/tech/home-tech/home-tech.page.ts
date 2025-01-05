import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-tech',
  templateUrl: './home-tech.page.html',
  styleUrls: ['./home-tech.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomeTechPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

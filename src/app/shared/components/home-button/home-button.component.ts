import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  imports: [IonIcon],
})
export class HomeButtonComponent {
  type = input.required<'client-home' | 'tech-home'>();

  private router = inject(Router);

  constructor() {
    addIcons({
      clientHome: '/assets/icon/imagotipo-client.svg',
      techHome: '/assets/icon/imagotipo.svg',
    });
  }

  goHome() {
    if (this.type() === 'client-home') {
      this.router.navigate(['/client']);
    } else {
      this.router.navigate(['/technician']);
    }
  }
}

import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-sidebar-nav-button',
  templateUrl: './sidebar-nav-button.component.html',
  styleUrls: ['./sidebar-nav-button.component.scss'],
  imports: [IonIcon, RouterLink],
})
export class SidebarNavButtonComponent implements OnInit {
  name = input.required<string>();
  route = input<string>();
  icon = input<string>();
  type = input.required<'client' | 'tech'>();
  currentRoute = input<string>();

  protected cssClass =
    'flex gap-3 items-center py-2 px-3 rounded-lg w-full font-bold text-xl';

  constructor() {
    addIcons({
      homeTech: '/assets/icon/home.svg',
      homeClient: '/assets/icon/home-client.svg',
      leave: 'assets/icon/leave.svg',
      leaveClient: 'assets/icon/leave-client.svg',
      doc: '/assets/icon/doc.svg',
      docClient: '/assets/icon/doc-client.svg',
      megaphone: '/assets/icon/megaphone.svg',
      megaphoneClient: '/assets/icon/megaphone-client.svg',
      route: '/assets/icon/route.svg',
    });
  }

  ngOnInit(): void {
    const activeRoute = this.currentRoute();
    const route = this.route();
    const type = this.type();
    if (activeRoute) {
      if (route?.includes(activeRoute)) {
        this.cssClass += ' border border-solid ';
      }
      if (type === 'client') {
        this.cssClass += 'border-golden-bell-600 text-golden-bell-600';
      }

      if (type === 'tech') {
        this.cssClass += 'border-chateau-green-600 text-chateau-green-600';
      }
    }
  }
}

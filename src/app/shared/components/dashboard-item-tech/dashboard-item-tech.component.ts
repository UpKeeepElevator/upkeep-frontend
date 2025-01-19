import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard-item-tech',
  templateUrl: './dashboard-item-tech.component.html',
  styleUrls: ['./dashboard-item-tech.component.scss'],
  imports: [IonIcon],
})
export class DashboardItemTechComponent implements OnInit {
  private _route = inject(Router);

  items = input.required<string[]>();
  title = input.required<string>();
  type = input.required<'client' | 'tech'>();
  route = input<string>('');

  private GetColor = () =>
    this.type() == 'client' ? 'golden-bell-600' : 'mantis-600';
  constructor() {}

  titleStyle = () =>
    `text-lg font-bold ${this.GetColor()} text-${this.GetColor()}`;
  cardStyle = () => {
    return `w-full p-2 border border-${this.GetColor()}  border-3 rounded-xl`;
  };

  ngOnInit() {}

  GoToRoute() {
    if (this.route() != '') {
      this._route.navigate([this.route()]);
    }
  }
}

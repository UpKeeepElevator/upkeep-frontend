import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Route } from 'src/app/core/models/route';
import { RouteService } from 'src/app/core/services/route.service';

@Component({
  selector: 'app-gestionar-ruta',
  templateUrl: './gestionar-ruta.component.html',
  styleUrls: ['./gestionar-ruta.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class GestionarRutaComponent implements OnInit {
  private _routeService = inject(RouteService);

  routes: Route[] = [];

  ngOnInit(): void {
    this._routeService.getRoutes().subscribe({
      next: (routes) => {
        this.routes = routes;
      },
    });
  }

  onFilter(): void {
    console.log('Filter button clicked');
  }

  onManageRoute(route: Route): void {
    console.log('Gestionar clicked for:', route);
  }
}

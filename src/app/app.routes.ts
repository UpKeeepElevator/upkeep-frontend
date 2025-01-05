import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'hoome-app',
    loadComponent: () => import('./pages/hoome-app/hoome-app.page').then( m => m.HoomeAppPage)
  },
  {
    path: 'home-app',
    loadComponent: () => import('./pages/home-app/home-app.page').then( m => m.HomeAppPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];

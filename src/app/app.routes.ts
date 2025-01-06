import { Routes } from '@angular/router';
import { adminChildGuard, adminGuard } from './core/guards/admin.guard';
import { techChildGuard, techGuard } from './core/guards/tech.guard';
import { clientChildGuard, clientGuard } from './core/guards/client.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'administrator',
    loadComponent: () => import('./pages/admin/home-admin/home-admin.page').then( m => m.HomeAdminPage),
    canActivate: [adminGuard],
    canActivateChild: [adminChildGuard]
  },
  {
    path: 'technician',
    loadComponent: () => import('./pages/tech/home-tech/home-tech.page').then( m => m.HomeTechPage),
    canActivate: [techGuard],
    canActivateChild: [techChildGuard]
  },
  {
    path: 'client',
    loadComponent: () => import('./pages/client/home-client/home-client.page').then( m => m.HomeClientPage),
    canActivate: [clientGuard],
    canActivateChild: [clientChildGuard]
  },
  {
    path: 'password-recovery',
    loadComponent: () => import('./pages/password-recovery/password-recovery.page').then( m => m.PasswordRecoveryPage)
  },
];

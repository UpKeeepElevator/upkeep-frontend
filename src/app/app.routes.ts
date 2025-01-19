import { Routes } from '@angular/router';
import { adminChildGuard, adminGuard } from './core/guards/admin.guard';
import { clientChildGuard, clientGuard } from './core/guards/client.guard';
import { techChildGuard, techGuard } from './core/guards/tech.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'administrator',
    loadComponent: () =>
      import('./pages/admin/home-admin/home-admin.page').then(
        (m) => m.HomeAdminPage
      ),
    loadChildren: () =>
      import('./pages/admin/routes.admin').then((m) => m.ADMIN_ROUTES),
    canActivate: [adminGuard],
    canActivateChild: [adminChildGuard],
  },
  {
    path: 'technician',
    loadComponent: () =>
      import('./pages/tech/home-tech/home-tech.page').then(
        (m) => m.HomeTechPage
      ),
    loadChildren: () =>
      import('./pages/tech/tech.routes').then((m) => m.TECH_ROUTES),
    canActivate: [techGuard],
    canActivateChild: [techChildGuard],
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./pages/client/home-client/home-client.page').then(
        (m) => m.HomeClientPage
      ),
    loadChildren: () =>
      import('./pages/client/client.routes').then((m) => m.CLIENT_ROUTES),
    canActivate: [clientGuard],
    canActivateChild: [clientChildGuard],
  },
  {
    path: 'password-recovery',
    loadComponent: () =>
      import('./pages/password-recovery/password-recovery.page').then(
        (m) => m.PasswordRecoveryPage
      ),
  },
  {
    path: 'sidebar',
    loadComponent: () =>
      import('./shared/components/sidebar/sidebar.component').then(
        (m) => m.NavbarComponent
      ),
  },
];

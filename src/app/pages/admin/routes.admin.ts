import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-admin/dashboard-admin.component').then(
        (client) => client.DashboardAdminComponent
      ),
  },
  {
    path: 'gestionar',
    loadComponent: () =>
      import('./gestionar-admin/gestionar-admin.page').then(
        (m) => m.AdminGestionarComponent
      ),
  },

  {
    path: 'reportes',
    loadComponent: () =>
      import('./reportes-admin/reportes-admin.component').then(
        (m) => m.ReportesAdminComponent
      ),
  },
  {
    path: 'gestionar/averia',
    loadComponent: () =>
      import(
        './gestionar-admin/gestionar-averia/gestionar-averia.component'
      ).then((m) => m.GestionarAveriaComponent),
  },
  {
    path: 'gestionar/usuario',
    loadComponent: () =>
      import(
        './gestionar-admin/gestionar-usuario/gestionar-usuario.component'
      ).then((m) => m.GestionarUsuarioComponent),
  },
  {
    path: 'gestionar/solicitud',
    loadComponent: () =>
      import(
        './gestionar-admin/gestionar-solicitud/gestionar-solicitud.component'
      ).then((m) => m.GestionarSolicitudComponent),
  },
  {
    path: 'gestionar/ruta',
    loadComponent: () =>
      import('./gestionar-admin/gestionar-ruta/gestionar-ruta.component').then(
        (m) => m.GestionarRutaComponent
      ),
  },
  {
    path: 'gestionar/equipo',
    loadComponent: () =>
      import(
        './gestionar-admin/gestionar-equipo/gestionar-equipo.component'
      ).then((m) => m.GestionarEquipoComponent),
  },
];

import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
},
{
    path: 'dashboard',
    loadComponent: () => import('./dashboard-admin/dashboard-admin.component').then(client => client.DashboardAdminComponent)
},
    {
        
        path: 'gestionar',
        loadComponent: () => import('./gestionar-admin/gestionar-admin.page').then( m => m.AdminGestionarComponent)
      },

      {
        
        path: 'reportes',
        loadComponent: () => import('./reportes-admin/reportes-admin.component').then( m => m.ReportesAdminComponent)
        
      },
      {
        
        path: 'gestionar/averia',
        loadComponent: () => import('./gestionar-admin/gestionar-averia/gestionar-averia.component').then( m => m.GestionarAveriaComponent)
      },
      {
        
        path: 'gestionar/usuario',
        loadComponent: () => import('./gestionar-admin/gestionar-usuario/gestionar-usuario.component').then( m => m.GestionarUsuarioComponent)
      },
      {
        
        path: 'gestionar/solicitud',
        loadComponent: () => import('./gestionar-admin/gestionar-solicitud/gestionar-solicitud.component').then( m => m.GestionarSolicitudComponent)
      },
      {
        
        path: 'gestionar/ruta',
        loadComponent: () => import('./gestionar-admin/gestionar-ruta/gestionar-ruta.component').then( m => m.GestionarRutaComponent)
      },
      {
        
        path: 'gestionar/equipo',
        loadComponent: () => import('./gestionar-admin/gestionar-equipo/gestionar-equipo.component').then( m => m.GestionarEquipoComponent)
      },
      {
        
        path: 'gestionar/usuario/gestionar-usuario',
        loadComponent: () => import('./gestionar-admin/gestionar-usuario/form-gestionar-usuario/form-gestionar-usuario.component').then( m => m.FormGestionarUsuarioComponent)
      },
      {
        path: 'gestionar/usuario/nuevo-usuario',
        loadComponent: () => import('./gestionar-admin/gestionar-usuario/form-agregar-usuario/form-agregar-usuario.component').then( m => m.FormAgregarUsuarioComponent)
      },
      {
        path: 'gestionar/usuario/gestionar-cliente',
        loadComponent: () => import('./gestionar-admin/gestionar-usuario/form-gestionar-cliente/form-gestionar-cliente.component').then( m => m.FormGestionarClienteComponent)
      },
      {
        path: 'gestionar/usuario/nuevo-cliente',
        loadComponent: () => import('./gestionar-admin/gestionar-usuario/form-agregar-cliente/form-agregar-cliente.component').then( m => m.FormAgregarClienteComponent)
      },
      
]
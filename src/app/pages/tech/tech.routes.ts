import { Routes } from '@angular/router';

export const TECH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard-tech/dashboard-tech.component').then(
        (m) => m.DashboardTechComponent
      ),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./history-tech/history-tech.component').then(
        (tech) => tech.HistoryTechComponent
      ),
  },
  {
    path: 'solicitar',
    loadComponent: () =>
      import('./solicitar/solicitar.component').then(
        (tech) => tech.SolicitarComponent
      ),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('./report-tech/report-tech.component').then(
        (tech) => tech.ReportTechComponent
      ),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./success-tech/success-tech.component').then(
        (client) => client.SuccessTechComponent
      ),
  },
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./maintenance-report/maintenance-report.component').then(
        (client) => client.MaintenanceReportComponent
      ),
  },
];

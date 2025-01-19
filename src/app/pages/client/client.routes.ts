import { Routes } from "@angular/router";

export const CLIENT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard-client/dashboard-client.component').then(client => client.DashboardClientComponent)
    },
    {
        path: 'history',
        loadComponent: () => import('./history-client/history-client.component').then(client => client.HistoryClientComponent)
    },
    {
        path: 'success',
        loadComponent: () => import('./success-client/success-client.component').then(client => client.SuccessClientComponent)
    }
]
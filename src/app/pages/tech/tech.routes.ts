import { Routes } from "@angular/router";

export const TECH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        loadComponent: () => import('./dashboard-tech/dashboard-tech.component').then(m => m.DashboardTechComponent)
    }
]
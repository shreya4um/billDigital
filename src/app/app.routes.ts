import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'auth',
        loadChildren:()=> import('./views/auth/auth.routes').then((r)=> r.AUTH_ROUTES)
    },
    {
        path:'dashboard',
        loadComponent:()=> import('./views/dashboard/dashboard.component').then((c)=> c.DashboardComponent),
        canActivate:[AuthGuard]
    }
];

import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';

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
        path:'layout',
        loadComponent:()=> import('./layout/layout.component').then((c)=> c.LayoutComponent),
    },
 
    {
        path: '', 
        component: LayoutComponent, 
        children: [

            {
                path:'dashboard',
                loadComponent:()=> import('./views/dashboard/dashboard.component').then((c)=> c.DashboardComponent),
                // canActivate:[AuthGuard]
            },

        ]}

];

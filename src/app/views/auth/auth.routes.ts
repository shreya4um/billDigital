import { Routes } from "@angular/router";


export const AUTH_ROUTES: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:()=> import('./login/login.component').then((m)=> m.LoginComponent)
    },
    {
        path:'signup',
        loadComponent:()=> import('./signup/signup.component').then((m)=> m.SignupComponent)
    },
    {
        path:'select-account',
        loadComponent:()=> import('./signup-select-account/signup-select-account.component').then((m)=> m.SignupSelectAccountComponent)
    },
  
]

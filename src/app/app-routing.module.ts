import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    title: "Online Cource Landing",
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  { 
    title: "Online Cource Landing",
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    title: "Login",
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { 
    title: "Registration",
    path: 'registration', 
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) 
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewLoginComponent } from './new-login/new-login.component';


const routes: Routes = [
{
  path:"login",
  component:LoginComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"new-login",
  component:NewLoginComponent
},
{
  path:"",
  redirectTo:"./new-login",
  pathMatch:"full"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

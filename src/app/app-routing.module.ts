import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DriversComponent } from './drivers/drivers.component';
import { TeamsComponent } from './teams/teams.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'contact', 
    component:ContactComponent
  },
  {
    path: 'drivers', 
    component: DriversComponent
  },
  {
    path: 'teams', 
    component: TeamsComponent
  },
  {
    path: 'driver/:id', 
    component: DriverInfoComponent
  },
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

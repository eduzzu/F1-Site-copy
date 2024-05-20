import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DriversComponent } from './drivers/drivers.component';
import { TeamsComponent } from './teams/teams.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
 
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'contact', 
    component:ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'drivers', 
    component: DriversComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teams', 
    component: TeamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'driver/:id', 
    component: DriverInfoComponent,
    canActivate: [AuthGuard]
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

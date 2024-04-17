import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DriversComponent } from './drivers/drivers.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path: 'drivers', component: DriversComponent
  },
  {
    path: 'teams', component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import { HomeComponent } from './home/home.component';
import {NotFoundErrorComponent} from './not-found-error/not-found-error.component';
import {PatientComponent} from './patient/patient.component';

const routes: Routes = [
  //{
  //  path: '',
  //  pathMatch: 'full',
  //  component: HomeComponent,
  //},
  {
    path: 'show-patient',
    pathMatch: 'full',
    component: PatientComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

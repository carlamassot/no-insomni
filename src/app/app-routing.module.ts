import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouDiaComponent } from './nou-dia/nou-dia.component';
import { IniciComponent } from './inici/inici.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: 'inici', component: IniciComponent },
  { path: 'nou-dia', component: NouDiaComponent },
  { path: 'info', component: InfoComponent },
  { path: '',   redirectTo: '/inici', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {RedirectingComponent} from './redirecting/redirecting.component';



const routes: Routes = [
  {path: 'startup', component: RedirectingComponent},
  {path: '', redirectTo:  'startup', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

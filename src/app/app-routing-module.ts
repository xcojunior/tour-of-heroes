import { NgModule } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  // A typical Angular Route has two properties:
  // path = the URL in the browser address bar.
  // component = Component that the router should create when navigating to this route.
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

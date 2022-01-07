import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {StaffLogoComponent} from './logo/staff-logo.component';
import {StaffKioskComponent} from './staff-kiosk.component';
import {SearchEventComponent} from './search-event/search-event.component';
import {EventStatsComponent} from './event-stats/event-stats.component';
import {StatusComponent} from './event-stats/status/status.component';
import {StaffLoginComponent} from './staff-login/staff-login.component';

const routes: Routes = [
  {
    path: 'StaffLogin',
    component:StaffLoginComponent
  },
  {
    path: 'Staff-kiosk',
    component:StaffLogoComponent,
    children:[
      {
        path: '',
        component: StaffKioskComponent
      },
      {
        path: 'search',
        component: SearchEventComponent,
      },
      {
        path: 'event',
        component: EventStatsComponent,
      },
      {
        path:'event/stats',
        component: StatusComponent,
        pathMatch: 'full'
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

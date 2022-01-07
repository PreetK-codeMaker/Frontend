import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLogoComponent } from './logo/staff-logo.component';
import {StaffRoutingModule} from './staff-routing.module';
import { SearchEventComponent } from './search-event/search-event.component';
import {StaffKioskComponent} from './staff-kiosk.component';
import { EventStatsComponent } from './event-stats/event-stats.component';
import { StatusComponent } from './event-stats/status/status.component';
import {ChartsModule} from 'ng2-charts';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {KioskModule} from '../kiosk/kiosk.module';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    StaffKioskComponent,
    StaffLogoComponent,
    SearchEventComponent,
    EventStatsComponent,
    StatusComponent,
    StaffLoginComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ChartsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    KioskModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    StaffRoutingModule,
  ]
})
export class StaffKioskModule { }

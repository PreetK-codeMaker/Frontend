import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { RedirectingComponent } from './redirecting/redirecting.component';
import {KioskModule} from './kiosk/kiosk.module';
import {HttpClientModule} from '@angular/common/http';
import {DataServiceService} from './service/data-service.service';
import {StaffKioskModule} from './StaffKiosk/staff-kiosk.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {DesktopUIModule} from './desktop-staffUI/desktop-ui.module';
import {DesktopRoutingModule} from './desktop-staffUI/desktop-ui-routing.module';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RedirectingComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    DesktopRoutingModule,
    MatListModule,
    DesktopUIModule,
    KioskModule,
    StaffKioskModule,

    DeviceDetectorModule.forRoot(),
    AppRoutingModule
  ],

  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

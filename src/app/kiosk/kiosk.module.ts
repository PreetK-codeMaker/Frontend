import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import {KioskComponent} from './kiosk.component';
import {KioskRoutingModule} from './kiosk-routing.module';
import { RegisterPermissionComponent } from './registration/register-permission.component';
import { RegisterFinishedComponent } from './registration/register-finished.component';
import { SearchGuestComponent } from './search-guest/search-guest.component';
import { ValidationComponent } from './search-guest/validation.component';
import { CompleteComponent } from './search-guest/complete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LogoComponent} from './logo.component';




@NgModule({
  declarations: [
    KioskComponent,
    RegistrationComponent,
    RegisterPermissionComponent,
    RegisterFinishedComponent,
    SearchGuestComponent,
    ValidationComponent,
    CompleteComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KioskRoutingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogoComponent
  ]
})
export class KioskModule { }

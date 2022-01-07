import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {KioskComponent} from './kiosk.component';
import {RegistrationComponent} from './registration/registration.component';
import {RegisterPermissionComponent} from './registration/register-permission.component';
import {RegisterFinishedComponent} from './registration/register-finished.component';
import {SearchGuestComponent} from './search-guest/search-guest.component';
import {ValidationComponent} from './search-guest/validation.component';
import {CompleteComponent} from './search-guest/complete.component';
import {LogoComponent} from './logo.component';

const routes: Routes = [
  {path: 'kiosk',
    component:LogoComponent,
    children:[
      {path: '',
      component: KioskComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        pathMatch: 'full'
      },
      {
        path: 'registration/permission',
        component: RegisterPermissionComponent,
        pathMatch : 'full'

      },
      {
        path: 'registration/permission/finished',
        component: RegisterFinishedComponent,
        pathMatch: 'full'
      },

      {
        path: 'search',
        component: SearchGuestComponent,
        pathMatch: 'full'
      },
       {
           path: 'search/validation',
           component: ValidationComponent,
            pathMatch: 'full'
       },
       {
           path: 'search/validation/complete',
           component: CompleteComponent,
          pathMatch: 'full'
       },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KioskRoutingModule {}

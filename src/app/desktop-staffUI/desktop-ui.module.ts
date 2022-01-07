import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesktopRoutingModule} from './desktop-ui-routing.module';
import {DeskopUIComponent} from './deskop-ui.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReportMenuComponent } from './report-menu/report-menu.component';
import { EventMenuComponent } from './events/event-menu/event-menu.component';
import { EventSearchComponent } from './events/event-search/event-search.component';
import { ListEventComponent } from './events/list-event/list-event.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { EventCompletionDialogComponent } from './events/event-completion-dialog/event-completion-dialog.component';
import { ViewEventComponent } from './events/view-event/view-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';



@NgModule({
  declarations: [
    DeskopUIComponent,
    MainMenuComponent,
    ReportMenuComponent,
    EventMenuComponent,
    EventSearchComponent,
    ListEventComponent,
    CreateEventComponent,
    DeleteEventComponent,
    EventCompletionDialogComponent,
    ViewEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesktopRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule

  ],
  entryComponents:[
    EventCompletionDialogComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    },
    {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: false}
    }

  ]
})
export class DesktopUIModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeskopUIComponent } from './deskop-ui.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {EventMenuComponent} from './events/event-menu/event-menu.component';
import {ReportMenuComponent} from './report-menu/report-menu.component';
import {EventSearchComponent} from './events/event-search/event-search.component';
import {ListEventComponent} from './events/list-event/list-event.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {DeleteEventComponent} from './events/delete-event/delete-event.component';
import {ViewEventComponent} from './events/view-event/view-event.component';
import {EditEventComponent} from './events/edit-event/edit-event.component';


const routes: Routes = [
  {
    path:'desk',
    component:DeskopUIComponent,
    children: [
      {
        path:'main',
        children:[
              {
                path:'',
                component:MainMenuComponent,
              },
              {
                path:'searchEvent',
                component:EventSearchComponent
              },
              {
               path:'listEvent',
                component:ListEventComponent
              },
              {
                path:'reportingMenu',
                component:ReportMenuComponent
              },
              {
                path:'createEvent',
                component:CreateEventComponent
              },
              {
                path:'deleteEvent',
                component:DeleteEventComponent
              },
              {
                path:'viewEvent',
                component:ViewEventComponent
              },
              {
                path:'editEvent',
                component:EditEventComponent
              }

            ]
       },
      {
        path:'eventMenu',
        component:EventMenuComponent
      }

    ]

  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }

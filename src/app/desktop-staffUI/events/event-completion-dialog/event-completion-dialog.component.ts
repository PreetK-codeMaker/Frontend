import {Component, Inject, OnInit} from '@angular/core';
import {CreateEventComponent} from '../create-event/create-event.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DesktopComponentCommunicationService} from '../../desktop-service/desktop-component-communication.service';
import {map} from 'rxjs/operators';
import {DesktopDataService} from '../../desktop-service/desktop-data.service';

@Component({
  selector: 'app-event-completion-dialog',
  templateUrl: './event-completion-dialog.component.html',
  styleUrls: ['./event-completion-dialog.component.css']
})
export class EventCompletionDialogComponent implements OnInit {

  // eventName:string = this.newEvent.event.name;
  private eevt:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private desktopDataSharing: DesktopComponentCommunicationService,
              private desktopDataServ: DesktopDataService) {
  }

  ngOnInit(): void {
  }

  send(data: any){
    let num :number =0;
    this.desktopDataServ.eventList$.pipe(

      map(evts =>evts.forEach(evt =>{
        if(evt.eventName === this.data.name){
          this.eevt= evt;
        }
      }))
    ).subscribe(data =>{
      console.log(this.eevt);
      this.desktopDataSharing.eventDataToShare(this.eevt);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import {EventDataFetchingService} from '../data-service/event-data-fetching.service';
import {map, tap} from 'rxjs/operators';
import {EventModel} from '../../Model/EventModel';
import {StaffDataSharingService} from '../data-service/Staff-data-sharing.service';
import {InformationSharingService} from '../../kiosk/sharedServices/information-sharing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-stats',
  templateUrl: './event-stats.component.html',
  styleUrls: ['./event-stats.component.css']
})
export class EventStatsComponent implements OnInit {
  clicked;
  private todayDate = new Date();
  filterEvent$ = this.dataService.eventList$
    .pipe(
      map(events => events.filter(event => {
        let eventDate = new Date(event.startDate);
        if(eventDate.getDate() === this.todayDate.getDate()){
          return event;
        }
      }))
    );

  constructor(private dataService: EventDataFetchingService,
              private dataSharing: StaffDataSharingService,
              private route: Router
  ) { }

  ngOnInit() {
  this.dataSharing.getNext(this.route.url)
  }

  chosenEvent(event: EventModel) {
   this.dataSharing.selectedEvent(event);
  }

  changeRow(id:any){
    if(this.clicked === id){
      this.clicked = -1;
    }else {
      this.clicked =id;
    }
  }

}

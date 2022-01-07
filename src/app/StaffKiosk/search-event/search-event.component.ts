import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EventDataFetchingService} from '../data-service/event-data-fetching.service';
import {error} from 'util';
import {catchError, map, tap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {StaffDataSharingService} from '../data-service/Staff-data-sharing.service';
import {EventModel} from '../../Model/EventModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchEventComponent implements OnInit {
  private todayDate = new Date();
  events$ = this.dataService.eventList$
    .pipe(
      tap(data => console.log(data))
  );

  filterEvent$ = this.dataService.eventList$
    .pipe(
      map(events => events.filter(event => {
        let eventDate = new Date(event.startDate);
        if(eventDate.getDate() === this.todayDate.getDate()){
          return event;
        }
      }))
    );

  clicked;
  constructor(private dataService: EventDataFetchingService,
              private dataFetch: StaffDataSharingService,
              private route: Router
            ) { }

  ngOnInit() {
    this.dataFetch.getNext(this.route.url);
    console.log(this.route.url);

  }
  setData(event: EventModel) {
    this.dataFetch.eventInilization(event);
  }
  changeRow(id:any){
    if(this.clicked === id){
      this.clicked = -1;
    }else {
      this.clicked =id;
    }

  }

}

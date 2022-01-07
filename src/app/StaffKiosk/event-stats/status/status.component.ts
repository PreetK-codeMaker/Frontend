import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {StaffDataSharingService} from '../../data-service/Staff-data-sharing.service';
import {EventModel} from '../../../Model/EventModel';
import {EventDataFetchingService} from '../../data-service/event-data-fetching.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private selectedEvent: EventModel;
  private inviteNumber: number = 0;
  private walkNumber: number = 0;
  private attendance: number = 0;

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true
  };


  constructor(private dataSharing: StaffDataSharingService,
              private dataFetching:EventDataFetchingService ) {

  }

  ngOnInit() {
    this.dataSharing.selectedEvent$.subscribe(data => {this.selectedEvent = data;

    });

    this.dataFetching.attendanceList$.pipe(
      map(events => events.forEach(evt =>{
        console.log(evt);
        // console.log('hello',evt.event.eventID);
        if(evt.event.eventID === this.selectedEvent.eventID){
          if(evt.typeID.typeId === 1){
            this.walkNumber ++;
            console.log(this.walkNumber);
          }else{
            this.inviteNumber++;
            console.log('Invite List', this.inviteNumber);
          }
        }
      }))

    ).subscribe(data =>{
      this.fillPieChart();
    });

  }

  fillPieChart() {
    this.pieChartLabels = ['Walk-ins','Invited'];
    this.pieChartData = [this.walkNumber, this.inviteNumber]
  }

}

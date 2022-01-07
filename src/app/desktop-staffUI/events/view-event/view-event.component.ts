import { Component, OnInit } from '@angular/core';
import {DesktopComponentCommunicationService} from '../../desktop-service/desktop-component-communication.service';
import {DesktopDataService} from '../../desktop-service/desktop-data.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  public evt: any;
  public evtPatner:any;
  public evtEmps :any;
  public evtInsight:any;
  public evtIndustry:any;
  public evtService:any;

  constructor(private desktopSharing: DesktopComponentCommunicationService,
              private desktopDataService: DesktopDataService) { }

  ngOnInit(): void
  {
    this.desktopSharing.eventToShare$.subscribe(data =>{

      this.getEvent(data)
    });

    this.desktopSharing.eventToSend$.subscribe(data => {
      this.getEvent(data);
    });

    // this.desktopDataService.getEventById(this.event.name).subscribe();
  }

  getEvent(data:any){
    this.evt = this.desktopDataService.eventList$.pipe(
      map(evets => evets.find(evt => evt.eventID ===data.eventID)),
      tap(dat => console.log(dat))
    );
    this.evtPatner = this.desktopDataService.empList$.pipe(
      map(emps => emps.find(emp => emp.employeeID ==data.partner))
    );
    this.evtEmps = this.desktopDataService.eventEmpList$.pipe(
      map(evts => evts.filter(evtEmp => evtEmp.event.eventID ==data.eventID))
    );
    this.evtIndustry = this.desktopDataService.eventIndustryList$.pipe(
      map(evtIndus => evtIndus.find(indus => indus.event.eventID ==data.eventID))
    );

    this.evtInsight = this.desktopDataService.eventInsightList$.pipe(map(
      evtInsi=> evtInsi.find(insigh => insigh.event.eventID == data.eventID)
    ));

    this.evtService = this.desktopDataService.evntServiceList$.pipe(map(
      evtServi=> evtServi.find(service => service.event.eventID == data.eventID)
    ));
    console.log(this.evtPatner,'Hello Word');
  }
}

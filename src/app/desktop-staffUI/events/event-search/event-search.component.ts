import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable, Subject} from 'rxjs';
import {EventModel} from '../../../Model/EventModel';
import {DesktopDataService} from '../../desktop-service/desktop-data.service';
import {catchError, map, tap} from 'rxjs/operators';
import {DesktopComponentCommunicationService} from '../../desktop-service/desktop-component-communication.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventSearchComponent implements OnInit {

  filt= new FormControl();
  filter:string;
  filterEvt$: Observable<any[]>;
  private searchCriteria:string;
  listOfEvent:EventModel[] = [];
  filteredEvent:any[] =[];


evets$ = this.eventData.eventList$.pipe(
  map(evts => evts.filter(evt=>{
    if(evt.eventName === this.filter){
      console.log(evt)
    }
  })), tap(dat =>console.log(dat))
);

  constructor(private eventData: DesktopDataService,
              private desktopShare: DesktopComponentCommunicationService) {


  }

  ngOnInit(): void {
    this.filt.valueChanges.subscribe(data => {this.filter = data});
    console.log(this.filter);
  if(this.searchCriteria === undefined){
    this.searchCriteria = 'eventName';
  }

  this.eventData.eventList$.pipe(
    map(evt=> evt.forEach(e =>{
      this.listOfEvent.push(e);
    }))
  ).subscribe();

  }

  sendData(searchevt:HTMLInputElement){
    let value = searchevt.value.toLowerCase();
    this.filteredEvent = this.listOfEvent.filter(evt => evt.eventName.toLowerCase().indexOf(value) !==-1)

  }
  onSelected(searchBy: string): void{
    console.log(searchBy);
    if(searchBy.toLowerCase() === 'name'){
      this.searchCriteria = 'eventName'
    }
    else if(searchBy.toLowerCase() === 'partner')
      {
      this.searchCriteria ='partner';
      }
    this.searchCriteria = searchBy;
  }
  search(key:string){


    this.listOfEvent.filter(evt =>{
      if(this.searchCriteria === 'partner'){
        if(evt.partner.toLowerCase().indexOf(key.toLowerCase()) >-1) {
          this.filteredEvent.push(evt);
        }
      }else if(key === ''|| key === undefined || key === null){
        this.listOfEvent = null;
      }

    });


    console.log(this.listOfEvent, 'helo');
  }

  toView(result: any){
    this.desktopShare.eventFromSearch(result);
  }

}

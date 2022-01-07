import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesktopComponentCommunicationService {

  private newEvent = new BehaviorSubject<any>('');
  eventToShare$ = this.newEvent.asObservable();

  private selectedEvent = new ReplaySubject<any>(1);
  eventToSend$  =this.selectedEvent.asObservable();

  constructor() { }

  eventDataToShare(evnt:any){
    console.log(evnt, '<--------------');
    this.newEvent.next(evnt);
  }
  eventFromSearch(evt:any){
    this.selectedEvent.next(evt);
    console.log(evt);
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {EventModel} from '../../Model/EventModel';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class StaffDataSharingService {

  private dataSharing = new BehaviorSubject<EventModel>(null);
  currentData$ = this.dataSharing.asObservable();

  private eventSelection = new BehaviorSubject<EventModel>(null);
  selectedEvent$ = this.eventSelection.asObservable();

  public bannerChange = new BehaviorSubject<string>('/Staff-kiosk');
  currBanner$ = this.bannerChange.asObservable();

  // private sidenav:MatSidenav;

  constructor() {
  }

  eventInilization(data: EventModel) {
    this.dataSharing.next(data);
  }

  selectedEvent(event: EventModel) {
    this.eventSelection.next(event);
  }

  getNext(banner: string) {
    this.bannerChange.next(banner);

  }
}


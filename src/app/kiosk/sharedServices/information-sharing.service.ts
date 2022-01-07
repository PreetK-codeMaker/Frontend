import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {GuestModel} from '../../Model/guestModel';
import { LOCAL_STORAGE,StorageService } from 'ngx-webstorage-service';
import {EventModel} from '../../Model/EventModel';

@Injectable({
  providedIn: 'root'
})
export class InformationSharingService {

  private Storage_Key = 'event_id';
  private evtNumber: number;

  private dataSharing = new BehaviorSubject<boolean>(false);
  currentData = this.dataSharing.asObservable();

  private guestDataShare = new ReplaySubject<GuestModel>(1);
  guestDataBeingPassed$ = this.guestDataShare.asObservable();

  private changeBanner = new BehaviorSubject<boolean>(false);
  currentBanner$ = this.changeBanner.asObservable();

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  changeData(data: boolean) {
    this.dataSharing.next(data);
    console.log(data);
  }

  guestDataPersistence(guest: GuestModel) {
    this.guestDataShare.next(guest);
    console.log(guest);

  }
   assignEventId(evet:EventModel){
    if(evet !== null){
      const currentLocalStorageBox = this.storage.get(this.Storage_Key);
      // currentLocalStorageBox.push(evet);
      this.storage.set(this.Storage_Key,evet);

      console.log('----> This works',this.storage.get(this.Storage_Key));
    }
  }

   eventID(): EventModel{
    let event:EventModel = this.storage.get(this.Storage_Key);
    return event;
  }

  bannerChange(value:boolean){
    this.changeBanner.next(value);
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from '../sharedServices/data.service';
import {catchError, map, tap} from 'rxjs/operators';
import {combineLatest, EMPTY, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {GuestModel} from '../../Model/guestModel';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-guest',
  templateUrl: './search-guest.component.html',
  styleUrls: ['./search-guest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchGuestComponent implements OnInit {
  clicked;
  guest: GuestModel;
  isDisable = false;
  private count = 0;
  private loopCounter = 0;
  filter = new FormControl();
  filter$: Observable<string>;
  filteredGuest$: Observable<GuestModel[]>;

  guests$ = this.dataSer.guestList$
    .pipe(
      map(data => data.filter(
        guest =>
        {

          if( guest.event === undefined || guest.event.event.eventID !== this.dataSharing.eventID().eventID){
            delete data[this.loopCounter];
          }
          else if ( guest.event.event.eventID === this.dataSharing.eventID().eventID ) {
           return guest;
         }
         this.loopCounter++;
        }
      )),
      catchError(err =>{
        console.log(err);
        return EMPTY;
      }),
      tap(data => console.log('Checking if this approach works',data))
    );


  constructor(private dataSer: DataService,
              private dataSharing: InformationSharingService,
              private route: Router) {
    console.log(this.filter.value);
    this.filter$ = this.filter.valueChanges;

  }

  ngOnInit() {
    this.filteredGuest$ = combineLatest([
      this.guests$,
      this.filter$
    ]).pipe(
      map(([guests,filter]) =>
        guests.filter(
        guest =>
          guest.guestLastName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
        )) ,
      tap(data => console.log(data))
    );
  }

  guestInfo(guest: GuestModel, guests: any): void {
    for (let x in guests) {
      console.log(guests[x]);
      if(guests[x].guestLastName === guest.guestLastName){
        this.count ++;
        console.log(this.count);
      }
    }
    if(this.count > 1) {
      console.log('worked ')
    }
    this.isDisable = true;
    this.guest = guest;

  }

  validateGuest(): void {

    this.dataSharing.guestDataPersistence(this.guest);
    // this.search.selectedGuestChanged(this.guestModel);
    if (this.count > 1) {
      this.route.navigate(['kiosk/search/validation']);
    } else {
      this.route.navigate(['kiosk/search/validation/complete']);
    }
  }

  clear() {
    if(this.filter.value === '' ){
      this.isDisable = false;

    }

  }
  newChangeToOld(settingToFalse: boolean) {
    this.dataSharing.changeData(settingToFalse);
  }
  changeRow(id:any){
    if(this.clicked === id){
      this.clicked = -1;
    }else {
      this.clicked =id;
    }
  }
}

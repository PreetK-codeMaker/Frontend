import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {GuestModel} from '../../Model/guestModel';
import {DataService} from '../sharedServices/data.service';

@Component({
  selector: 'app-compelete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  guestFirstName: any;
  private guest: GuestModel;
  constructor(private router: Router,
              private dataPersistence: DataService,
              private dataSharing: InformationSharingService
  ) { }

  ngOnInit() {
    this.dataSharing.guestDataBeingPassed$.subscribe(data => {
      this.guestFirstName = data.guestFirstName;
      this.guest = data;
      return data;
    });
    setTimeout(() => {
      this.router.navigate(['/kiosk']);
      this.dataSharing.changeData(false);
      this.addToAttendance()
    }, 5000);
  }

  addToAttendance() {
    let Attendance: any ={
      id:{
        guestID: this.guest.guestID,
        eventID: this.dataSharing.eventID().eventID
      },
      guest: {
        guestID: this.guest.guestID
      },

      event: {
        eventID: this.dataSharing.eventID().eventID
      },

      typeID: {
        typeId: 2
      }
    };
    this.dataPersistence.addGuestToAttendanceInBackEnd(Attendance).subscribe()

  }


}

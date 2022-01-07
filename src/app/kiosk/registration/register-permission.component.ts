import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {GuestModel} from '../../Model/guestModel';
import {DataService} from '../sharedServices/data.service';
import {map} from 'rxjs/operators';
import {AttendanceModel} from '../../Model/AttendanceModel';

@Component({
  selector: 'app-register-permission',
  templateUrl: './register-permission.component.html',
  styleUrls: ['./register-permission.component.css']
})
export class RegisterPermissionComponent implements OnInit {

  // private an: RegistrationModel;
  private  guestData: GuestModel;
  private addGuestToAttendance: AttendanceModel;
  checked = false;
  dataTran: boolean;
  constructor(private route: Router,
              private dataPersistence: DataService,
              private dataSharing: InformationSharingService,
  ) {
  }

  ngOnInit() {
     this.dataSharing.currentData.subscribe(data => this.dataTran = data);
    this.dataSharing.guestDataBeingPassed$.subscribe(data => this.guestData = data);

  }

  regNewGuest() {

    // tslint:disable-next-line:prefer-const
    let check: number;
    if (this.checked === false) {
      this.guestData.emailPermission = 0;
    } else {
      this.guestData.emailPermission = 1;

    }
    this.guestData = {...this.guestData};
    this.dataPersistence.createRegistration(this.guestData).subscribe(
      data => {console.log('This is the Permission Speaking',data);
        this.addingGuestToAttendance();
      }
    );


  }

  addingGuestToAttendance () {
      console.log('Inside the the thing');
      let todayTime = new Date();

    this.dataPersistence.guestList$.pipe(
      map(guests => guests.forEach(guest => {
        console.log('hello');
        if(guest.guestEmail === this.guestData.guestEmail){
          let typeID:{typeID} = {
            typeID: 1
          };
          let Attendance: any ={
                id:{
                  guestID: guest.guestID,
                  eventID: this.dataSharing.eventID().eventID
                },
                 guest: {
                  guestID: guest.guestID
                 },

                 event: {
                  eventID: this.dataSharing.eventID().eventID
                 },

                typeID: {
                  typeId: 1
                }
          };
             this.dataPersistence.addGuestToAttendanceInBackEnd(Attendance).subscribe();
        }
      }))).subscribe();
    this.dataPersistence.addGuestToAttendanceList(this.guestData);

  }


}

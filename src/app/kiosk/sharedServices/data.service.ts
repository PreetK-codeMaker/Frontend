import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GuestModel} from '../../Model/guestModel';
import {buffer, catchError, map, shareReplay, tap} from 'rxjs/operators';
import {combineLatest, EMPTY, ReplaySubject, Subject} from 'rxjs';
import {AttendanceModel} from '../../Model/AttendanceModel';
import {GuestList} from '../../Model/GuestList';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private url = '/server/api/v1/Guest';
  private attendanceURL = '/server/api/v1/Attendance';
  private guestListEventURL = '/server/api/v1/GuestList';

  private attendanceGuestInsert = new ReplaySubject<any>(1);
  attendanceGuestInsertAction$ = this.attendanceGuestInsert.asObservable();


  guests$ = this.http.get<GuestModel []>(this.url)
    .pipe(
      map(guests=> guests.map(guest =>({
        ...guest
      }) as GuestModel)),

    );
  guestForEvent$ = this.http.get<GuestList []>(this.guestListEventURL).pipe(

    tap(data => console.log(data))
  );

  guestList$ = combineLatest([
    this.guests$,
    this.guestForEvent$
  ]).pipe(
    map(([guests,guestForEvent]) =>
    guests.map(guest =>({
      ...guest,
      event: guestForEvent.find(evt => {
        if( evt.guest.guestID  === guest.guestID ){
          console.log(evt.event.eventID,'This is testing.');
            return evt.event.eventID;
        }
      })
    })))


  );

  attendanceList$ = this.http.get<AttendanceModel []> (this.attendanceURL)
    .pipe(
      map(attendances =>
        attendances.map(attendance => ({
          ...attendance
        }) as AttendanceModel))
    );



  constructor(private http: HttpClient) { }

  createRegistration(registration: any) {
    const body = JSON.stringify(registration);
    console.log('THis is the broker talking', body);
    return this.http.post('/server/api/v1/Guest', body, {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})}).pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );
  }
  addGuestToAttendanceList(guest: GuestModel){
    this.attendanceGuestInsert.next(guest);

  }

  addGuestToAttendanceInBackEnd(guest:any){
    const body = JSON.stringify(guest);
    console.log('THis is the broker talking', body);
    return this.http.post(this.attendanceURL, body, {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})}).pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {EventModel} from '../../Model/EventModel';
import {EmployeeModel} from '../../Model/EmployeeModel';
import {AttendanceModel} from '../../Model/AttendanceModel';

@Injectable({
  providedIn: 'root'
})
export class EventDataFetchingService {
  private evtUrl: string = 'server/api/v1/Event';
  private empUrl: string = 'server/api/v1/Employee';
  private employeesPerEventUrl: string ='server/api/v1/Event/Employees/';
  private attendanceURL = '/server/api/v1/Attendance';

  eventList$ = this.http.get<EventModel[]>(this.evtUrl).pipe(
    map(events => events.map(event => ({
      ...event
    }) as EventModel))
  );

  empList$ = this.http.get<EmployeeModel[]>(this.empUrl)
    .pipe(
      map(employees => employees.map(emp =>({
        ...emp
      }) as EmployeeModel))
    );

  employeesPerEvent$ = this.http.get<any []>(this.employeesPerEventUrl).pipe(

  );
  attendanceList$ = this.http.get<any[]> (this.attendanceURL)
    .pipe(
    );


  constructor(private http: HttpClient) { }


}

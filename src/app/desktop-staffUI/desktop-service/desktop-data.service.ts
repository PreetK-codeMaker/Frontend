import { Injectable } from '@angular/core';
import {EventModel} from '../../Model/EventModel';
import {map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EmployeeModel} from '../../Model/EmployeeModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopDataService {
  private evtUrl: string = 'server/api/v1/Event';
  private empUrl: string = 'server/api/v1/Employee';
  private eventSaveUrl:string = 'server/api/v1/Event';
  private eventEmpSaveUrl:string ='server/api/v1/Event/Employees/';
  private industryUrl:string ='server/api/v1/Industry';
  private serviceUrl:string = 'server/api/v1/Service';
  private insightUrl:string = 'server/api/v1/Insight';

  //Get all the list of the event.
  eventList$ = this.http.get<EventModel[]>(this.evtUrl).pipe(
    map(events => events.map(event => ({
      ...event
    }) as EventModel)),
    tap(data => console.log(data))
  );

  empList$ = this.http.get<EmployeeModel []>(this.empUrl).pipe(
    map(emps => emps.map(emp =>({
      ...emp,
    }) as EmployeeModel)), tap(dat => console.log(dat))
  );

  eventEmpList$ = this.http.get<any []>(this.eventEmpSaveUrl).pipe(
    map(emps => emps.map(emp =>({
      ...emp,
    }) as any), tap(dat => console.log(dat)))
  );

  insightList$ = this.http.get<any[]>(this.insightUrl).pipe(
    map(insi => insi.map(insight =>({
      ...insight
    }) as any)),shareReplay(1)
  );

  industryList$ = this.http.get<any[]>(this.industryUrl).pipe(
    map(ind => ind.map(indust =>({
      ...indust
    }) as any)), shareReplay(1)
  );

  serviceList$  =  this.http.get<any[]>(this.serviceUrl).pipe(
    map(serv=> serv.map(servic =>({
      ...servic
    }) as any)), shareReplay(1)
  );

  evntServiceList$  =  this.http.get<any[]>('/server/api/v1/Event/Service').pipe(
    map(serv=> serv.map(servic =>({
      ...servic
    }) as any)), shareReplay(1)
  );

  eventInsightList$  =  this.http.get<any[]>('/server/api/v1/Event/Insight').pipe(
    map(serv=> serv.map(servic =>({
      ...servic
    }) as any)), shareReplay(1)
  );

  eventIndustryList$  =  this.http.get<any[]>('/server/api/v1/Event/Industry').pipe(
    map(serv=> serv.map(servic =>({
      ...servic
    }) as any)), shareReplay(1)
  );
  constructor(private http:HttpClient) { }

  createEvent(event:any){
    const body = JSON.stringify(event);
    return this.http.post(this.eventSaveUrl,body, {headers:new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})})
  }

  createEventEmp(evtEmp:any){
    const body = JSON.stringify(evtEmp);
    return this.http.post(this.eventEmpSaveUrl,body, {headers:new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})})

  }

  createEventIndustry(evtIndus:any){
    const body = JSON.stringify(evtIndus);
    return this.http.post('server/api/v1/Event/Industry',body, {headers:new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})})

  }

  createEventInsight(evtInsight:any){
    const body = JSON.stringify(evtInsight);
    return this.http.post('server/api/v1/Event/Insight',body, {headers:new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})})

  }

  createEventService(evtService:any){
    const body = JSON.stringify(evtService);
    return this.http.post('server/api/v1/Event/Service',body, {headers:new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})})
  }
  getEventById(evbt:number): Observable<EventModel>{
    return this.http.get<EventModel>('/server/api/v1/Event/get/'+evbt).pipe(

    )
    }
  getEventByName(evbt:string): Observable<EventModel>{
    return this.http.get<EventModel>('/server/api/v1/Event/getEventName/'+evbt).pipe(

    )
  }

}

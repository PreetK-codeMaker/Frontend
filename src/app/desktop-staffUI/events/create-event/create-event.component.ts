import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DesktopDataService} from '../../desktop-service/desktop-data.service';
import {map, tap} from 'rxjs/operators';
import {EmployeeModel} from '../../../Model/EmployeeModel';
import {MatDialog} from '@angular/material/dialog';
import {EventCompletionDialogComponent} from '../event-completion-dialog/event-completion-dialog.component';
import {EventModel} from '../../../Model/EventModel';
import {DesktopComponentCommunicationService} from '../../desktop-service/desktop-component-communication.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  staffArr:EmployeeModel []= [];
  event:any;
  private  evnts: EventModel;

  emps$= this.desktopDataServ.empList$.pipe(
    map(emps => emps.map(evt =>({
      ...evt,

    })as EmployeeModel), tap(s => console.log(s)
  )));

  insightList$ = this.desktopDataServ.insightList$.pipe(tap(da =>console.log(da)));
  industryList$ = this.desktopDataServ.industryList$.pipe(tap(da =>console.log(da)));
  serviceList$ = this.desktopDataServ.serviceList$.pipe(tap(da =>console.log(da)));
  constructor(private formBuilder: FormBuilder,
              private desktopDataServ: DesktopDataService,
              public dialog: MatDialog,
              private deskDataSharing: DesktopComponentCommunicationService) {}

  isComplete: boolean = true;
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name:new FormControl( '',[
        Validators.required
      ]),
      service:[''],
      Industry:[''],
      Insight:[''],
      Date:[''],
      Budget:[''],
      StartTime:['',Validators.required],
      EndTime:['', Validators.required],
      Location:['',Validators.required],
      Address:['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      partner: new FormControl(['', Validators.required]),
      staff:new FormControl(['',Validators.required]),
      manager:new FormControl(['',Validators.required])
    });

    this.thirdFormGroup = this.formBuilder.group({
      description: new FormControl(['', ])
    });

    this.fourthFormGroup= this.formBuilder.group({
      additionalInformation: new FormControl([''])
    });
  }

  addStaff(staff:EmployeeModel){
    this.staffArr.push(staff);
  }

  removeStaff(index: number): void {
    this.staffArr.splice(index,1);
  }

  openDialog(){

    console.log(this.evnts);
    const dialogRef = this.dialog.open(EventCompletionDialogComponent,{
      data: {...this.event},
    });


  }


  addEvent() {
  this.event ={
      ...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.thirdFormGroup.value, ...this.fourthFormGroup.value
    };
    const eventToSend= {
      eventName: this.event.name,
      partner: this.event.partner.employeeID,
      managerID:{
        employeeID:this.event.manager.employeeID,
      },
      startDate: this.event.Date,
      endDate: this.event.Date,
      location:this.event.Location,
      locationAddress:this.event.Address,
      budget:this.event.Budget,
      description:this.event.description,
      notes:this.event.additionalInformation
    };

    this.deskDataSharing.eventDataToShare(this.event);

    this.desktopDataServ.createEvent(eventToSend).subscribe(data =>{

      this.addEmployee();
    });


  }

  addEmployee(){

    this.desktopDataServ.eventList$.pipe(

      map(evts =>evts.forEach(evt =>{
        if(evt.eventName === this.event.name){
          this.evnts = evt;
        }
      }))
    ).subscribe(data =>{this.addEmp()});

  }

  addEmp(){

    let eventManger = {
      id:{
        employeeID: this.event.manager.employeeID,
        eventID: this.evnts.eventID

      },

      event:{
        eventID: this.evnts.eventID
      },
      employee:{
        employeeID: this.event.manager.employeeID,
      }
    };
    this.desktopDataServ.createEventEmp(eventManger).subscribe();
    let evntPartner ={
      id:{
        employeeID: this.event.partner.employeeID,
        eventID: this.evnts.eventID

      },

      event:{
        eventID: this.evnts.eventID
      },
      employee:{
        employeeID: this.event.partner.employeeID,
      }
    };
    this.desktopDataServ.createEventEmp(evntPartner).subscribe();
    for (let i = 0; i < this.staffArr.length; i++) {
      let eventEmpySave ={
        id:{
          employeeID: this.staffArr[i].employeeID,
          eventID: this.evnts.eventID

        },

        event:{
          eventID: this.evnts.eventID
        },
        employee:{
          employeeID: this.staffArr[i].employeeID
        }

      };
      this.desktopDataServ.createEventEmp(eventEmpySave).
      subscribe(data =>{this.addIndustry()});
    }

  }

  addIndustry(){

    console.log(this.evnts.eventID);
    console.log(this.event.Industry.industryID);
    let eventIndus ={
      id:{

        eventID:this.evnts.eventID,
        industryID: this.event.Industry.industryID
      },
      event:{
        eventID: this.evnts.eventID
      },
      industry:{
        industryID: this.event.Industry.industryID,

      }
    };
    console.log(this.event.Industry.industryName);
    this.desktopDataServ.createEventIndustry(eventIndus).subscribe(data =>{this.addInsight()});

  }
  addInsight(){

    let eventInsight ={
      id:{
        eventID:this.evnts.eventID,
        insightID: this.event.Insight.insightID
      },
      event:{
        eventID: this.evnts.eventID
      },
      industry:{
        insightID:this.event.Insight.insightID,
      }
    };
    this.desktopDataServ.createEventInsight(eventInsight).subscribe(data => {this.addService()});
  }
  addService(){

    let eventService ={
      id:{
        eventID:this.evnts.eventID,
        serviceID: this.event.service.serviceID
      },
      event:{
        eventID: this.evnts.eventID
      },
      service:{
        serviceID: this.event.service.serviceID,
      }
    };
    this.desktopDataServ.createEventService(eventService).subscribe();
  }


}

// this.event.Date+t

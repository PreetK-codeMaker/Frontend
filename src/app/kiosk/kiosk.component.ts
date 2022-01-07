import { Component, OnInit } from '@angular/core';
import {InformationSharingService} from './sharedServices/information-sharing.service';
import {StaffDataSharingService} from '../StaffKiosk/data-service/Staff-data-sharing.service';
import {EventModel} from '../Model/EventModel';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit {

  dataRec: boolean;
  constructor(private dataS: InformationSharingService,
              private dataSharing: StaffDataSharingService) { }

  ngOnInit() {
    this.dataSharing.currentData$.subscribe(data => {
      if(data !== null){
        this.dataS.assignEventId(data)
      }
    } );
    this.dataS. currentData.subscribe(data => this.dataRec = data);
  }

  newDataChange(change: boolean) {
    this.dataS.changeData(change);

  }
  newChangeToSearch(change:boolean){
    this.dataS.changeData(change);
    this.dataS.bannerChange(true);
  }

}

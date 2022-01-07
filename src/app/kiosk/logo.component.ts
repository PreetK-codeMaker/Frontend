import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InformationSharingService} from './sharedServices/information-sharing.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  dataRec: boolean;
  search: boolean;
  eventName:string;
  showBanner: boolean;
  constructor(private router: Router,
              private dataSharing: InformationSharingService) { }

  ngOnInit()
  {
    this.dataSharing.currentBanner$.subscribe(data => this.search = data);

    this.eventName = this.dataSharing.eventID().eventName;
    this.showBanner = false;
     this.dataSharing.currentData.subscribe(data => this.showComponent(this.dataRec = data));
    console.log( this.dataRec);
     this.showComponent(this.showBanner = this.dataRec );
  }

  showComponent( permission: any) {
    this.showBanner = permission;
  }

}

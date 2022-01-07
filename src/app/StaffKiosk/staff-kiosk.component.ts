import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StaffDataSharingService} from './data-service/Staff-data-sharing.service';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-staff-kiosk',
  templateUrl: './staff-kiosk.component.html',
  styleUrls: ['./staff-kiosk.component.css']
})
export class StaffKioskComponent implements OnInit {


  // sidenav:MatSidenav;
  constructor(private route: Router,
              private staffDataSharing: StaffDataSharingService) { }

  ngOnInit() {
    this.staffDataSharing.getNext(this.route.url);
  }

}

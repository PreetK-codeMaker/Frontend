import { Component, OnInit } from '@angular/core';
import {MatMenu} from '@angular/material/menu';
import {StaffDataSharingService} from '../data-service/Staff-data-sharing.service';

@Component({
  selector: 'app-logo',
  templateUrl: './staff-logo.component.html',
  styleUrls: ['./staff-logo.component.css']
})
export class StaffLogoComponent implements OnInit {
  banner: string='';
  constructor(private staffInfoSharing: StaffDataSharingService) { }



  ngOnInit() {

    this.staffInfoSharing.currBanner$.subscribe(data => {
      console.log(data);
      if(data === '\/Staff-kiosk/search'){
        this.banner = 'SELF-SERVICE';
        console.log(this.banner)
      }
      else if (data === '\/Staff-kiosk/event'){
        this.banner = 'EVENT SELECTION'
      }
      else {
        this.banner = 'MAIN MENU';
      }
    });

  }


}

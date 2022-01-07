import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../service/data-service.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-redirecting',
  templateUrl: './redirecting.component.html',
  styleUrls: ['./redirecting.component.css']
})
export class RedirectingComponent implements OnInit {
  //Library I am using https://www.npmjs.com/package/ngx-device-detector

  constructor(private deviceService: DeviceDetectorService,
              private route:Router) { }

  ngOnInit() {
     if (this.deviceService.isTablet() || this.deviceService.isMobile()){// Ipad and shit
        this.route.navigate(['/StaffLogin']);
     } else if (this.deviceService.isDesktop()){ // This is deskptop.
       this.route.navigate(['/desk/main'])
     }

  }

}

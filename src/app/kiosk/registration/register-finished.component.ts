import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {DataService} from '../sharedServices/data.service';

@Component({
  selector: 'app-register-finished',
  templateUrl: './register-finished.component.html',
  styleUrls: ['./register-finished.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFinishedComponent implements OnInit {

  guest: any;
  constructor(private router: Router,
               private dataPass: InformationSharingService,
              private data:DataService
              ) {
    this.data.attendanceGuestInsertAction$.subscribe(data => {
      this.guest = data
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/kiosk']);
      this.dataPass.changeData(false);
    }, 5000);
  }

}

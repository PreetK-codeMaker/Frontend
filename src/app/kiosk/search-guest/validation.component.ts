import { Component, OnInit } from '@angular/core';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {GuestModel} from '../../Model/guestModel';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  validationField;
  matchError = true;
  guestData: GuestModel;
  constructor(private dataSharing: InformationSharingService,
              private route: Router) { }

  ngOnInit() {
    this.dataSharing.guestDataBeingPassed$.subscribe(data => this.guestData = data);
    console.log(this.guestData);

    this.validationField = new FormControl('',{
      validators:[Validators.required], updateOn:'change'
    });
  }
  validate() {
    console.log('THis validation filed',this.validationField.value);
    console.log('THis validation filed',this.guestData.guestEmail);
    let check =  this.validationField.value === this.guestData.guestEmail ? true : false;
    if(check){
      this.matchError = false;
      this.route.navigate(['kiosk/search/validation/complete']);
      console.log('IN If');
    }
    this.matchError = false;
    console.log('Not in OF');

  }

}

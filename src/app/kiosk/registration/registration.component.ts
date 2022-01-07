import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InformationSharingService} from '../sharedServices/information-sharing.service';
import {GuestModel} from '../../Model/guestModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  dataR: any;
  guest: GuestModel;
  constructor(private route: Router,
              private dataSer: InformationSharingService
              ) {}

  guestRegistration = new FormGroup({

    guestFirstName: new FormControl('', [
      Validators.required,
    ]),
    guestLastName: new FormControl('', [
      Validators.required,
    ]),
    guestEmail: new FormControl('', [
      Validators.email,
      Validators.required
    ])
  });


  ngOnInit() {
     this.dataSer.currentData.subscribe(data => this.dataR = data);

  }

  newChangeToOld(settingToFalse: boolean) {
     this.dataSer.changeData(settingToFalse);
  }

  login() {
    this.guestRegistration.setErrors({invalid: true});
  }
  get guestFirstName() {
    return this.guestRegistration.get('guestFirstName');
  }

  get guestLastName() {
    return this.guestRegistration.get('guestLastName');
  }
  get guestEmail() {
    return this.guestRegistration.get('guestEmail');
  }

  sendData() {
    this.guest = {
      ...this.guestRegistration.value,...this.guest
    };
    this.dataSer.guestDataPersistence(this.guest);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {



  staffLogin: FormGroup;
  constructor(private route: Router,
              private formBuilder:FormBuilder
              ) { }


  ngOnInit() {
    this.staffLogin = this.formBuilder.group({
      staffUsername: new FormControl('',[
        Validators.required,
      ]),
      staffPassword: new FormControl('',[
        Validators.required
      ]),
    });
  }

  get staffUsername(){
    return this.staffLogin.get('staffUsername');
  }

  get staffPassword() {
    return this.staffLogin.get('staffPassword');
  }
  submit() {
    if(this.staffLogin.invalid){
      Object.keys(this.staffLogin.controls).forEach(input =>{
        const field = this.staffLogin.get(input);
        field.markAllAsTouched();
      });
      return;
    }else
      {
        if(this.staffUsername.value === 'Mike'  && this.staffPassword.value === 'password'){
          this.route.navigate(['/Staff-kiosk']);
        }

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit { 
  model: any = {};
  public loginForm!: FormGroup;

  form: any = {
    username: null,
    fullname: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''; 

  constructor(private authService: AppService, private tokenStorage: TokenStorageService, public fb: FormBuilder) { 
  }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   username: '111-111-1111',
    //   password: 't'

    // });
  }

  onSubmit(): void {
    const { username, fullname, password } = this.form;

    this.authService.register(username, fullname, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  
}

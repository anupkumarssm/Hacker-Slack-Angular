import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1!: FormGroup;
  model: any = {};
  public loginForm!: FormGroup;
 
  errorMessage = '';

  loginform: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = []; 
  userName=""; 
  constructor(private authService: AppService, private tokenStorage: TokenStorageService,public fb: FormBuilder,private http: HttpClient, private route: ActivatedRoute,
    private router: Router) {
    this.form1 = this.fb.group({
      name: [''],
      avatar: [null]
    })
  }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '111-111-1111',
      password: 't'

    });
  } 
onLoginSubmit(): void {
  const { username, password } = this.loginform;

  this.authService.login(username, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.userName = this.tokenStorage.getUser().username;
     this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

reloadPage(): void {
 ///window.location.reload();
 window.location.reload();
 this.router.navigate(['home']);
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

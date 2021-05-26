import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './modal/user';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8080/api/auth/';
const API_URL = 'http://localhost:8080/api/test/';
const URL = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AppService {
 // private login: string;
  constructor(private httpClient: HttpClient) {
   // this.login = 'http://localhost:8080/api/logintest';
  } 

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }


  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'user', { responseType: 'text' });
  }


  
  addcontact(fullname: string, mobile: string): Observable<any> {
    return this.httpClient.post(URL + 'addContacts', {
      fullname,
      mobile
    }, httpOptions);
  }

  getcontacts(): Observable<any> {
    return this.httpClient.get(URL + 'contacts');
  }

}

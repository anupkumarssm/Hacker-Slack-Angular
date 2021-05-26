import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  title = 'Demo';
  greeting = {};
  userName="";
  tokenStr! : string | null;
  constructor(private app: AppService, private tokenStorage: TokenStorageService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }
  ngOnInit(): void {
    this.app.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.userName = this.tokenStorage.getUser().username;
     this.tokenStr=this.tokenStorage.getToken();

  }

}

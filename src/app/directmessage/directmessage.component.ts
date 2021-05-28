import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Contacts } from '../utils/contacts';
import { AppService } from '../app.service'; 

@Component({
  selector: 'app-directmessage',
  templateUrl: './directmessage.component.html',
  styleUrls: ['./directmessage.component.css']
})
export class DirectmessageComponent implements OnInit {
  contactList!: Contacts[];

  constructor(private modalService: NgbModal,private router: Router, private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getcontacts().subscribe(
      data => {
        this.contactList = data;
      },
      err => {
        this.contactList = err;
        console.log("DATA : " + err)
      }
    );
  }

  closeResult = ''; 

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  } 
  goToChatPage(_event: any,contact: any){
    //alert(contact.mobile)
this.router.navigate(['/chats'],{queryParams:{type:'direct',mobile:contact.mobile,fullname:contact.fullname}})
  }

}

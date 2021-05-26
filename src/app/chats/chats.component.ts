import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
type: string | null;
typeValue!: boolean | null;
  mainMessageBox: string = '<div><i> </i></div>';

  @ViewChild("textMessage") textMessage!: ElementRef;
  //interval!: NodeJS.Timeout;
  count = 0;

  constructor(private renderer: Renderer2,private router: Router,private route: ActivatedRoute) { 
    this.type = this.route.snapshot.queryParamMap.get('type');
    if(this.type == 'direct'){
      this.typeValue = true;
    }else{
this.typeValue = false;
    }
  }

  ngOnInit(): void {
     setInterval(() => {
        if(this.count == 0){
        console.log("OOOOOOOOO"+this.count)
        this.count++;
        }
       },1000)
      
  } 
  addElement() {
    this.mainMessageBox = this.mainMessageBox + '<div class="media w-50 mb-3"><div class="media-body ml-3"> <div class="bg-success rounded py-2 px-3 mb-2"> <p class="text-white">(Sender)</p> <p class="text-small mb-0 text-white">'+this.textMessage.nativeElement.value+'</p> </div> <p class="small text-muted">Date : 9 pm </p> </div></div>';
    this.mainMessageBox = this.mainMessageBox + ' <div class="media w-50 ml-auto mb-3"><div class="media-body"> <div class="bg-primary rounded py-2 px-3 mb-2"><p class="text-white">(Me)</p>  <p class="text-small mb-0 text-white">'+this.textMessage.nativeElement.value+'</p> </div> <p class="small text-muted">Date :55 pm</p> </div> </div>';
 
  }
 

}

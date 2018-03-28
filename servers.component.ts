import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //don't want user to create a new server.

  ngOnInit() {
  }
  onUpdateUserName() {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  check(){
    if(this.userName.length == 0){
      return true;
    }else{
      return false;
    }
  }
  userName:string;
  reset(){
    this.userName = '';
  }

    
   
}
  

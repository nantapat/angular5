import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //atrribute
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // ` ,
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //don't want user to create a new server.
  allowNewServer = false;
  checkStatus = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  
  // constructor() { 
  //   setTimeout(() => {
  //     //function body
  //     this.allowNewServer = true;
  //   },2000);
  // }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
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
  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isConnected! : boolean;

  constructor() { }

  ngOnInit(): void {
    this.isConnected = false;
  }
  connexion(){
    this.isConnected = true;
  }

}

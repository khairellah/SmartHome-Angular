import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private router:Router,
    private authService:AuthentificationService
    ) { }

  ngOnInit(): void {
  }
  connexion(){
    this.authService.login();
    this.router.navigate(['']);
  }

}

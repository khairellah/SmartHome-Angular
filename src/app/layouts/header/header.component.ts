import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/auth/service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService:AuthentificationService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['login'])
;
  }

}

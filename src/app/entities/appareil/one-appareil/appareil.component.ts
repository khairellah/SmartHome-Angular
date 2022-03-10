import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { Appareil } from '../appareil.model';
import { Router } from '@angular/router';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
@Input() appareil! :Appareil;
//etat!: boolean;
  constructor(
    private appareilServie : AppareilService,
    private router:Router) { }

  ngOnInit(): void {
    //this.etat=this.appareil.etat;
  }

  clickSwitch(){
    
    //this.etat = this.appareilServie.switchEtatAppareil(this.appareil.id , this.appareil.etat);
    this.appareil.etat=!this.appareil.etat;

  }

  goToEdit(id:number){
  this.router.navigate(['appareil',id,'edit']);
  }

}

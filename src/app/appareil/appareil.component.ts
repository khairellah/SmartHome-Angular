import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';
import { Appareil } from '../models/appareil.model';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
@Input() appareil! :Appareil;
//etat!: boolean;
  constructor(private appareilServie : AppareilService) { }

  ngOnInit(): void {
    //this.etat=this.appareil.etat;
  }

  clickSwitch(){
    
    //this.etat = this.appareilServie.switchEtatAppareil(this.appareil.id , this.appareil.etat);
    this.appareil.etat=!this.appareil.etat;

  }

}

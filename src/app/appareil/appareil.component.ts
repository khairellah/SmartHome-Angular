import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
@Input() appareil! :Appareil;
etat!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.etat=this.appareil.etat;
  }

}

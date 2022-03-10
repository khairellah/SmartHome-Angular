import { Component, OnInit } from '@angular/core';
import { Appareil } from '../appareil.model';
import { AppareilService } from '../service/appareil.service';


@Component({
  selector: 'appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.css']
})
export class AppareilListComponent implements OnInit {

  appareils!: Appareil[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    //Get All Appariels
    this.appareils = this.appareilService.getAllAppareils();
  }

}

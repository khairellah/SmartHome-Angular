import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilRoutingModule } from './route/appareil-routing-module';
import { AppareilComponent } from './one-appareil/appareil.component';
import { AppareilListComponent } from './list/appareil-list.component';



@NgModule({  
  imports: [
    CommonModule,
    AppareilRoutingModule
  ],
  declarations: [
    AppareilComponent,
    AppareilListComponent,
  ],
})
export class AppareilModule { }

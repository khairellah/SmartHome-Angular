import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//MatSlideToggle

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppareilComponent,
    AppareilListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

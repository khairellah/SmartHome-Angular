import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilListComponent } from './appareil-list/appareil-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppareilComponent,
    AppareilListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

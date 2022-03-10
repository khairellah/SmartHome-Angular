import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AppareilComponent } from './entities/appareil/one-appareil/appareil.component';
import { AppareilListComponent } from './entities/appareil/list/appareil-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationGuard } from './core/auth/service/authentification.guard';
import { AuthentificationService } from './core/auth/service/authentification.service';
import { AppareilModule } from './entities/appareil/appareil.module';
import { AppareilRoutingModule } from './entities/appareil/route/appareil-routing-module';
import { HeaderComponent } from './layouts/header/header.component';
//MatSlideToggle

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppareilRoutingModule
  ],
  providers: [AuthentificationService,AuthentificationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { AuthentificationGuard } from './authentification.guard';
import { AuthentificationService } from './authentification.service';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'appareils', component: AppareilListComponent,canActivate: [AuthentificationGuard] },
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

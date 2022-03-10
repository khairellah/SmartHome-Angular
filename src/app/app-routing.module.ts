import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs';
import { AppareilListComponent } from './entities/appareil/list/appareil-list.component';
import { AuthentificationGuard } from './core/auth/service/authentification.guard';
import { LoginComponent } from './core/auth/login/login.component';
const routes: Routes = [
  
  { 
    path: 'appareil', 
    canActivate: [AuthentificationGuard],
    loadChildren: ()=>import("./entities/appareil/appareil.module").then(m=>m.AppareilModule)
  },
  { path: 'login', component: LoginComponent },
  
  { path: '**', redirectTo:'appareil' },
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

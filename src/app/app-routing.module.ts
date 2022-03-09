import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'appareils', component: AppareilListComponent },
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

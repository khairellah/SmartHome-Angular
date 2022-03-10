import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  localStorageVar = "isConnected";
  
  
  isLogedIn:boolean;

  constructor(){
    this.isLogedIn = !!localStorage.getItem(this.localStorageVar);
  }
  
  login():void{
    this.isLogedIn = true;
    this.saveToLocalStorage();
  }
  logout():void{
  this.isLogedIn =false;
  this.removeLocalStorage();
  }


  saveToLocalStorage():void{
    localStorage.setItem(this.localStorageVar,"connected");
  }
  removeLocalStorage():void{
    localStorage.removeItem(this.localStorageVar);
  }
    
}

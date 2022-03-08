import { Injectable } from '@angular/core';
import { Appareil } from './models/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
appareils: Appareil[] = 
[
  {
    id:1,
    nom: 'Tv Samsung',
    categorie: 'TV',
    etat:false
  },
  {
    id:2,
    nom: 'Four Bosh',
    categorie: 'FOUR',
    etat:true
  },
  {
    id:3,
    nom: 'Refrigerateur LG',
    categorie: 'REFRIG',
    etat:false
  },
]


getAllAppareils() : Appareil[] {
  return this.appareils;
}

getAppareilById(apparielId: number): Appareil {
  const appareil = this.appareils.find(appareil => appareil.id === apparielId);
  if (!appareil) {
    throw new Error('Appareil not found!');
  } else {
    return appareil;
  }
}

switchEtatOn(){
  
}

}

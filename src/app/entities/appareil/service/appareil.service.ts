import { Injectable } from '@angular/core';
import { Appareil } from '../appareil.model';

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
    etat:false
  },
  {
    id:3,
    nom: 'Refrigerateur LG',
    categorie: 'REFRIG',
    etat:true
  },
  {
    id:4,
    nom: 'Refrigerateur LG',
    categorie: 'REFRIG',
    etat:true
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

/* switchEtatAppareil(apparielId: number, etat:boolean): boolean {
  const appareil = this.getAppareilById(apparielId);
  etat === true ? appareil.etat=false : appareil.etat=true;
  console.log(apparielId,etat);
  return appareil.etat;
} */

}

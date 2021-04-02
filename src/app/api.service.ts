import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // EXEMPLE D'UN APPEL API
  // PERMET DE RENVOYER UN TABLEAU DE BIERES DOCUMENTE PAR L'API
  // RETOURNE UN TABLEAU D'ELEMENTS (DES BIERES)
  getBeers(): Promise<any> {
    return fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  // RETOURNE DANS UN OBJET TOUTE LES INFORMATIONS SUR LA BIERE AVEC L'ID FOURNI EN PARAMETRE
  getBeer(id : number) : Promise<any> {
    return fetch('https://api.punkapi.com/v2/beers/' + id)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  }
}

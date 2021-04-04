import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-our-beers',
  templateUrl: './our-beers.component.html',
  styleUrls: ['./our-beers.component.scss']
})
export class OurBeersComponent implements OnInit {
  //ON DECLARE UN ATTRIBUT DE CLASSE QUI EST UN TABLEAU
  beers : any[];

  constructor(public api : ApiService) {
    console.log(this.api);
   }

  ngOnInit(): void {
    // IMPOSSIBLE DE FAIRE CA CAR ON FAIT APPEL A UNE API
    // LA GESTION DES DONNES EST ASYNCHRONE
    // IL Y A UN TEMPS D'ATTENTE ENTRE LA REQUETE ET LA REPONSE
    // const beers = this.api.getBeers();

    //ON UTILISE CETTE SYNTAXE POUR ATTENDRE LA REPONSE
    this.api.getBeers().then((data) => {
      // RECUPERE LES TROIS PREMIERES BIERES DU TABLEAU
      this.beers = data.slice(3,6);
    });
  }

}

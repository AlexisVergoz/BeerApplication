import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  parameter : number;
  beer : any;

  constructor(private route : ActivatedRoute , public api : ApiService) { }

  ngOnInit(): void {
    // RECUPERATION DU PARAMETRE NOMME 'ID' CONTENU DANS l'URL
    // EXEMPLE : LOCALHOST:4200/beer/50 --> ON STOCKE LE 50 DANS L'ATTRIBUT 'parameter'.
    this.parameter = this.route.snapshot.params['id'];
    // JE VEUX RECUPERER DEPUIS l'API , TOUTES LES INFORMATIONS SUR LA BIERE AVEC
    // LE PARAMETRE SAISI DANS l'URL (EX : 50)
    this.api.getBeer(this.parameter).then(data => {
      console.log(data);
      // JE STOCKE LE RESULTAT DE MON APPEL API DANS MON ATTRIBUT DE CLASS 'this.beer'
      // [0] POUR RECUPERER UNIQUMENT LE PREMIER (ET SEUL) ELEMENT DU TABLEAU RETOURNE
      this.beer = data[0];
    })

  }

}

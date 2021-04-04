import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog : any[];

  constructor(public api : ApiService) { }

  ngOnInit(): void {
    // JE RECUPERE TOUTES LES BIERES VIA LA METHODE DE MON SERVICE API
    this.api.getBeers().then(data => {
      // JE STOCKE LE RESULTAT DANS MON ATTRIBUT DE CLASSE QUE J'AI NOMME CATALOG
      this.catalog = data;
    });
  }

}

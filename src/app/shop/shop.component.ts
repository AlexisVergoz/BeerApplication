import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any[];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    // JE RECUPERE TOUTES LES BIERES VIA LA METHODE DE MON SERVICE API
    this.api.getBeers().then((data) => {
      // JE STOCKE LE RESULTAT DANS MON ATTRIBUT DE CLASSE QUE J'AI NOMME CATALOG
      this.products = data;
    });
  }
}

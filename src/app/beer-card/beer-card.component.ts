import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  // NOTRE BIERE EST UN ATTRIBUT D'INPUT DE NOTRE COMPOSANT
  // SA VALEUR EST TRANSMISE PAR UN AUTRE COMPOSANT (UN COMPOSANT PERE)
  @Input() beer : any;
  constructor() { }

  ngOnInit(): void {
  }

}

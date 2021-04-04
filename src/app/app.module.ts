import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { OurBeersComponent } from './home/our-beers/our-beers.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { ShopComponent } from './shop/shop.component';
import { BeerComponent } from './beer/beer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    OurBeersComponent,
    BeerCardComponent,
    CatalogComponent,
    ShopComponent,
    BeerComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

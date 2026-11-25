import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoffeeCard } from './coffee-card/coffee-card';
import { Products } from './products/products';
import { HeaderComponent } from './header-component/header-component';
import { NavbarComponent } from './navbar-component/navbar-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { FooterComponent } from './footer-component/footer-component';
import { TestComp } from './test-comp/test-comp';
import { BetaComp } from './beta-comp/beta-comp';
import { ShoppingCartComponent } from './shopping-cart-component/shopping-cart-component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
    TestComp,
    BetaComp,
    ShoppingCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoffeeCard, Products],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}

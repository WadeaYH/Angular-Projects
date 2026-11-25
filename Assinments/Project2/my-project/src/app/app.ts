import { Product } from './product-list-component/product-list-component';
import { Component, signal } from '@angular/core';


export interface FeaturedProduct{
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {

  productName = signal("Laptop");
  productDescription = signal("Dell Laptop, Core i7, 16GB RAM");
  productPrice = signal(850);
  isAvailable = signal(true);

  cartName = signal("");
  cartPrice = signal(0);
  cartQuantity = signal(0);

  addToCart(name: string, quantity: number){
    this.cartName.set(name);
    this.cartPrice.set(this.productPrice());
    this.cartQuantity.set(quantity);
  }

  showLaptop(){
    this.productName.set("Laptop");
    this.productDescription.set("Dell Laptop, Core i7, 16GB RAM");
    this.productPrice.set(850);
    this.isAvailable.set(true);
  }

  showHeadphones(){
    this.productName.set("Wireless Headphones");
    this.productDescription.set("Bluetooth Headphones");
    this.productPrice.set(120);
    this.isAvailable.set(true);
  }

  protected readonly title = signal('ElectroShop');

  storeName: string = "ElectroShop";
  storeDescription: string = "Your favorite electronics store";
  storeAddress: string = "Amman, Jordan";
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = "USD";

  productNames: string[] = ["Smartphone", "Headphones", "Smart Watch", "Keyboard"];
  productPrices: number[] = [450, 80, 120, 45];

  featuredProduct: FeaturedProduct = {
    name: "Laptop",
    price: 750,
    description: "High-performance laptop"
  };

  message: string = "";

  discountPercentage: number = 10;
  finalPrice: number = 0;

  totalNumberOfProducts: number = 0;
  mostExpensiveProductPrice: number = 0;
  cheapestProductPrice: number = 0;
  totalValue: number = 0;

  constructor(){
    if(this.isStoreOpen) this.message = "We Are Open";
    else this.message = "We Are Closed";

    if(this.discountPercentage > 0){
      this.finalPrice = this.featuredProduct.price - (this.featuredProduct.price * this.discountPercentage / 100);
    }
    else{
      this.finalPrice = this.featuredProduct.price;
    }

    this.totalNumberOfProducts = 1;
    this.mostExpensiveProductPrice = this.featuredProduct.price;
    this.cheapestProductPrice = this.featuredProduct.price;
    this.totalValue = this.featuredProduct.price;

    for(let i = 0; i < this.productPrices.length; i++){
      this.totalNumberOfProducts++;
      this.totalValue += this.productPrices[i];

      if(this.productPrices[i] > this.mostExpensiveProductPrice){
        this.mostExpensiveProductPrice = this.productPrices[i];
      }
      if(this.productPrices[i] < this.cheapestProductPrice){
        this.cheapestProductPrice = this.productPrices[i];
      }
    }
  }
}

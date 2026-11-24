import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {

  productName: string = "Laptop";
  productDescription: string = "High-performance laptop";
  productPrice: number = 750;
  productImage: string = "https://placehold.co/200x200?text=Laptop";
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  increaseQuantity(){
    this.quantity++;
  }

  decreaseQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  getFinalPrice(){
    let discountedPrice = this.productPrice - (this.productPrice * this.discountPercentage / 100);
    return discountedPrice * this.quantity;
  }

}

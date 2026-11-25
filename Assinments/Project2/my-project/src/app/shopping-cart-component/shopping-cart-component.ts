import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-component',
  standalone: false,
  styleUrl: './shopping-cart-component.css',
  templateUrl: './shopping-cart-component.html',
})
export class ShoppingCartComponent {

  @Input() productName = "";
  @Input() productPrice = 0;
  @Input() quantity = 0;

  getTotalPrice(){
    return this.productPrice * this.quantity;
  }

}

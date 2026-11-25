import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {

  @Input() productName = "";
  @Input() productDescription = "";
  @Input() productPrice = 0;
  @Input() isAvailable = true;

  quantity = signal(1);

  @Output() cartAdded = new EventEmitter<{name: string, quantity: number}>();

  increaseQuantity(){
    this.quantity.update(currentValue => currentValue + 1);
  }

  decreaseQuantity(){
    if(this.quantity() > 1){
      this.quantity.update(currentValue => currentValue - 1);
    }
  }

  addToCart(){
    this.cartAdded.emit({name: this.productName, quantity: this.quantity()});
  }

}

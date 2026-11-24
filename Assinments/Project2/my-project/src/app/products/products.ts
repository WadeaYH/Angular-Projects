import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[FormsModule],
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  productName: string = "Laptop";

  price: number = 800;

  times: number = 0;

  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm9_PY8KX_8vT93HRpauEt0mmiIMuloT4xp9yEnBB3kLyFlccFCFQqhV3GFAsaK3Px9rLQ43lws4LmwEtn_ce26c5uW9k0KHAFxYfjNY&s=10";

  isDisabled: boolean = false;

  message = 'Welcome!';

  userName = "Wadea";
  // sayHello() {
  //   alert('Hello from Angular!');
  // }

  increase(){
    this.times++;
  }

  picMeow(){
    alert("You hover over pic");
  }
}

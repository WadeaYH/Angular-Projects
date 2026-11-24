import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: false,
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {

  storeName = "ElectroShop";

  message = "Welcome to ElectroShop Store! | 👋";

  slogan = "Everything You Need in One Place";

}

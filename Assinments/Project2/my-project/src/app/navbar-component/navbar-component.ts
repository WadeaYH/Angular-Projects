import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  standalone: false,
  styleUrl: './navbar-component.css',
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {

  selectedPage = "Home";

  homePage(){
    this.selectedPage = "Home";
  }

  productsPage(){
    this.selectedPage = "Products";
  }

  aboutPage(){
    this.selectedPage = "About Us";
  }

  contactPage(){
    this.selectedPage = "Contact Us";
  }

}

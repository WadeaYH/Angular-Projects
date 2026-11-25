import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-test-comp',
  standalone: false,
  styleUrl: './test-comp.css',
  templateUrl: './test-comp.html',
})
export class TestComp {

  age = signal(0);

  username = signal("Wadea");
  
  constructor(){
    this.age.set(5);
    this.age.update(currentValue => currentValue + 1);


  }

}

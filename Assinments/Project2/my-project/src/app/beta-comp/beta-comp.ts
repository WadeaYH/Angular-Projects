import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-beta-comp',
  standalone: false,
  styleUrl: './beta-comp.css',
  templateUrl: './beta-comp.html',
})
export class BetaComp {
  @Input() username = "";
}

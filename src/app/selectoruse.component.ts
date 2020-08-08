import { Component } from '@angular/core';

@Component({
  selector: 'selector-use',
//   selector: '.selector-use-class',
  // selector: '[selector-use-attribute]',
  templateUrl: './selectoruse.component.html',
  styleUrls: ['./app.component.css']
})
export class SelectorUseComponent {
  countryName = 'India';
  stateName = 'West Bengal';
}

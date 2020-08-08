import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-image',
  template: `
  <h2>Welcome to Angular!</h2>
  <img src="assets/welcome.jpg" height="200"/>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

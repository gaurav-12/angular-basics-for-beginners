import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
  <h3>Page not found...</h3>
  <img src="assets/404.jpg" width="400"/>
  `,
  styleUrls: ['./app.component.css']
})
export class PageNotFound implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

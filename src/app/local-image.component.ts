import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-image',
  template: `
  <h2>Using local Image</h2>
  <img src="assets/someimage.jpg" width="300"/>
  `,
  styleUrls: ['./app.component.css']
})
export class LocalImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

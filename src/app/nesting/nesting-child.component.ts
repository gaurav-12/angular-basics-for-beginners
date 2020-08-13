import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nesting-child',
  template: `
  <h3> Following text comes from parent component {{todayDate}} </h3>
  <button on-click="fireEvent()" > Send to Parent! </button>
  `,
  styleUrls: ['../app.component.css']
})
export class NestingChild {
  @Input('date') public todayDate;
  @Output() public childEvent = new EventEmitter();

  fireEvent = () => {
    this.childEvent.emit(new Date());
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nesting-parent',
  template: `
  <nesting-child date={{todayDate}} (childEvent)="fromChild=$event"></nesting-child>
  <h3> Here is something from Child "{{fromChild}}" </h3>
  `,
  styleUrls: ['../app.component.css']
})
export class NestingExample {
  todayDate = new Date();
  fromChild = "";
}
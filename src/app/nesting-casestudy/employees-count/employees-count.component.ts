import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employees-count',
  templateUrl: './employees-count.component.html',
  styleUrls: ['./employees-count.component.css']
})
export class EmployeesCountComponent {
  @Input('all') public allCount;
  @Input('male') public maleCount;
  @Input('female') public femaleCount;

  @Output() public countSelectionChanged = new EventEmitter<string>();
  onCountRadioChanged = (e) => {
    this.countSelectionChanged.emit(e.target.value);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit{

  selectedCountRadio = 'all';

  getAllCount() {
    return this.employees.length;
  }

  getMaleCount() {
    return this.employees.filter(e => e.gender === 'male').length;
  }

  getFemaleCount() {
    return this.employees.filter(e => e.gender === 'female').length;
  }

  employees = [
    {id: 0, name: 'Tom', gender: 'male', dob: '12/02/1999'},
    {id: 1, name: 'Sundar', gender: 'male', dob: '12/02/1984'},
    {id: 2, name: 'Laxmi', gender: 'female', dob: '12/02/1991'},
    {id: 3, name: 'Mark', gender: 'male', dob: '12/02/1990'},
    {id: 4, name: 'Arya', gender: 'female', dob: '12/02/1997'},
    {id: 5, name: 'Darlin', gender: 'female', dob: '12/02/1989'},
    {id: 6, name: 'Satya', gender: 'male', dob: '12/02/1995'},
    {id: 7, name: 'Caroline', gender: 'female', dob: '12/02/1986'},
  ]

  constructor() {}
  ngOnInit() {
    
  }
}

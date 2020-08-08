import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from './emp-service.service';

@Component({
  selector: 'emps-details',
  templateUrl: './employees.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeesComponent implements OnInit{
  constructor (private servEmployees : EmpServiceService) { }

  serviceEmployees = [];

  ngOnInit(): void {
    this.serviceEmployees = this.servEmployees.getEmployeesList();
  }
  onAgeClick = () => {
    alert('The age is assumed by the developer, as each movie or series shows different time')
  }

  employees = [
    {
      'id': 1,
      'name': 'Sherlock Holmes',
      'age': 30,
      'address': '221 Baker Street',
      'gender': 'male'
    },
    {
      'id': 2,
      'name': 'Martha Louise Hudson',
      'age': 65,
      'address': '221 Baker Street',
      'gender': 'female'
    },
    {
      'id': 3,
      'name': 'John H. Watson',
      'age': 30,
      'address': '221 Baker Street',
      'gender': 'male'
    }
  ];
}

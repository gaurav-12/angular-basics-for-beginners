import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../../services/emp-service.service';

@Component({
  selector: 'emps-details',
  templateUrl: './employees.component.html',
  styleUrls: ['../../app.component.css']
})
export class EmployeesComponent {
  constructor (public servEmployees : EmpServiceService) { }

  changeEmpAge = (employee, index) => {
    const newAge = prompt('Enter new age of ' + employee.name);

    this.servEmployees.empList[index].age = parseInt(newAge);
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

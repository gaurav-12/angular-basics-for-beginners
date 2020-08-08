import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }

  getEmployeesList() {
    return [
      {
        'id': 1,
        'name': 'Jon Doe',
        'age': 30,
        'address': 'Some Address',
        'gender': 'male'
      },
      {
        'id': 2,
        'name': 'Dove Jon',
        'age': 25,
        'address': 'Unique Address',
        'gender': 'female'
      },
      {
        'id': 3,
        'name': 'Don Joe',
        'age': 65,
        'address': 'Another Address',
        'gender': 'male'
      },
      {
        'id': 4,
        'name': 'J. Don',
        'age': 25,
        'address': 'Similar Address',
        'gender': 'female'
      }
    ];
  }
}
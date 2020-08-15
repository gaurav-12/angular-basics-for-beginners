import { Injectable } from '@angular/core';
import { Employee } from '../form/model/employee.model';

@Injectable()
export class EmployeeFormService {
  selectedEmployee: Employee = new Employee();
  employees: Employee[];

  constructor() { }

}
import { Injectable } from '@angular/core';
import { Employee } from '../form/model/employee.model';

@Injectable()
export class EmployeeFormService {
  selectedEmployee: Employee = null;
  employees: Employee[];

  constructor() { }

}
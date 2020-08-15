import { Component, OnInit } from '@angular/core';
import { EmployeeFormService } from '../../services/employee-form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [EmployeeFormService]
})
export class EmployeeFormComponent implements OnInit {

  constructor(public employeeService: EmployeeFormService) { }

  ngOnInit() {
  }

  onSubmit = (employeeForm?: NgForm) => {
    console.log(employeeForm.value);
  }

  resetForm = (employeeForm?: NgForm) => {
    employeeForm.resetForm();
  }

}
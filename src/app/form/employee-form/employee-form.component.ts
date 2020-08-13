import { Component, OnInit } from '@angular/core';
import { EmployeeFormService } from '../../services/employee-form.service';
import { NgModel } from '@angular/forms';

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

  onSubmit = (employeeForm: NgModel) => {
    console.log(employeeForm.viewModel);
  }

}
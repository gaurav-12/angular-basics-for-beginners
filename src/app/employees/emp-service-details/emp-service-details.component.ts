import { Component, OnInit } from "@angular/core";
import { EmpServiceService } from "../../services/emp-service.service";

@Component({
  selector: "app-emp-service-details",
  templateUrl: "./emp-service-details.component.html",
  styleUrls: ["../../app.component.css"]
})
export class EmpServiceDetailsComponent {
  constructor(public servEmployees: EmpServiceService) {}

  changeEmpAge = (employee, index) => {
    const newAge = prompt("Enter new age of " + employee.name);

    this.servEmployees.empList[index].age = parseInt(newAge);
  };
}

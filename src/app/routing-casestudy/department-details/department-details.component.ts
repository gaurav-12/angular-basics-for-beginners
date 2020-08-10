import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-department-details",
  templateUrl: "./department-details.component.html",
  styleUrls: ["./department-details.component.css"]
})
export class DepartmentDetailsComponent {
  departments = [
    { id: 0, name: "Angular" },
    { id: 1, name: "MongoDB" },
    { id: 2, name: "Express" },
    { id: 3, name: "Node JS" },
    { id: 4, name: "Bootstrap" }
  ];

  name = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const department = this.departments[this.route.snapshot.paramMap.get("id")];

    console.log(department === null, department === undefined);

    if (department === undefined) this.name = "na";
    else this.name = department.name;
  }
}

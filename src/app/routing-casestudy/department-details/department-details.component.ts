import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-department-details",
  templateUrl: "./department-details.component.html",
  styleUrls: ["./department-details.component.css"]
})
export class DepartmentDetailsComponent {
  departments = [
    { id: 0, name: "Angular", url: "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/angular.png" },
    { id: 1, name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/mongodb.png" },
    { id: 2, name: "Express", url: "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/expressjs.png" },
    { id: 3, name: "Node JS", url: "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/nodejs.png" },
    { id: 4, name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/bootstrap.png" }
  ];

  name = null;
  logo = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const department = this.departments[this.route.snapshot.paramMap.get("id")];

    console.log(department === null, department === undefined);

    if (department === undefined) {
      this.name = "na";
      this.logo = "https://cdn.jsdelivr.net/gh/gaurav-12/angular-basics-for-beginners@master/src/assets/404.jpg"
    }
    else {
      this.name = department.name;
      this.logo = department.url;
    }
  }
}

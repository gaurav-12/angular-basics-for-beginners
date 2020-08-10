import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent {
  departments = [
    {'id': 0, 'name': 'Angular'},
    {'id': 1, 'name': 'MongoDB'},
    {'id': 2, 'name': 'Express'},
    {'id': 3, 'name': 'Node JS'},
    {'id': 4, 'name': 'Bootstrap'},
  ]

  constructor (private router: Router, private route: ActivatedRoute) {}

  onSelect = (department) => {
    this.router.navigate(['departments', department.id], {relativeTo: this.route.parent});
  }
}
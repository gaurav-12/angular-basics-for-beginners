import { Component } from '@angular/core';

@Component({
  selector: 'emp-details',
  templateUrl: './employee.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeComponent {
  imageHidden = false;
  detailsShowing = true;
  employee = {
    'image': 'https://pyxis.nymag.com/v1/imgs/ded/65a/efcbcbd6f6aa1752455699a534a245d5b8-20-sherlock-holmes.2x.rhorizontal.w710.jpg',
    'id': 1,
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'age': 30,
    'address': '221 Baker Street'
  };

  getFullName = () => {
    return this.employee.firstName + ' ' + this.employee.lastName;
  };

  toggleImage = () => {
    this.imageHidden = !this.imageHidden;
    document.getElementById('hideImageId').innerHTML = this.imageHidden? 'Show Image!' : 'Hide Image!'
  }
  toggleDetails = () => {
    this.detailsShowing = !this.detailsShowing;
    document.getElementById('hideDetailsId').innerHTML = this.detailsShowing? 'Hide Details!' : 'Show Details!'
  }
}

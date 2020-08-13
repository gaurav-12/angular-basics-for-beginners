import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/component/employee.component';

import { EmployeesComponent } from './employees/component/employees.component';

import { HelloComponent } from './hello/component/hello.component';

import { LocalImageComponent } from './local-image/local-image.component';

import { SelectorUseComponent } from './selector-use/component/selectoruse.component';

import { PageNotFound } from './404/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { NestingExample } from './nesting/nesting.component';

import { EmployeesListComponent } from './nesting-casestudy/employees-list/employees-list.component';

import { DepartmentComponent } from './routing-casestudy/department/department.component';
import { DepartmentDetailsComponent } from './routing-casestudy/department-details/department-details.component';
import { DepartmentsListComponent } from './routing-casestudy/departments-list/departments-list.component';
import { RoutingEmployeesListComponent } from './routing-casestudy/routing-employees-list/routing-employees-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Default path, redirects to above path

  {path: 'emp_details', component: EmployeeComponent},
  {path: 'emps_details', component: EmployeesComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'local_image', component: LocalImageComponent},
  {path: 'selector_use', component: SelectorUseComponent},
  {path: 'nested', component: NestingExample},
  {path: 'nested_casestudy', component: EmployeesListComponent},

  {path: 'routing_casestudy', component: DepartmentComponent, children: [
    {path: 'departments', component: DepartmentsListComponent},
    {path: '', redirectTo: 'departments', pathMatch: 'full'},
    {path: 'departments/:id', component: DepartmentDetailsComponent},
    {path: 'employees', component: RoutingEmployeesListComponent}
  ]},

  {path: '**', component: PageNotFound} // 404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  EmployeesComponent,
  EmployeeComponent,
  HelloComponent,
  LocalImageComponent,
  SelectorUseComponent,
  PageNotFound,
  HomeComponent,
  NestingExample,
  EmployeesListComponent,
  DepartmentComponent,
  DepartmentDetailsComponent,
  DepartmentsListComponent,
  RoutingEmployeesListComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees.component';
import { HelloComponent } from './hello.component';
import { LocalImageComponent } from './local-image.component';
import { SelectorUseComponent } from './selectoruse.component';
import { PageNotFound } from './page-not-found.component';
import { HomeComponent } from './home.component';
import { NestingExample } from './nesting.component';
import { EmployeesListComponent } from './nesting-casestudy/employees-list/employees-list.component';

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
  EmployeesListComponent
];
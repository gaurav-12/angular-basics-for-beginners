import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTitlePipe } from './pipes/employee-title.pipe';
import { NestingChild } from './nesting/nesting-child.component';
import { EmpServiceService } from './services/emp-service.service';
import { EmployeesCountComponent } from './nesting-casestudy/employees-count/employees-count.component';
import { EmployeeFormService } from './services/employee-form.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NestingChild,
    EmployeeTitlePipe,
    EmployeesCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmpServiceService, EmployeeFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

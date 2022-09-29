import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { ServeErrorComponent } from './serve-error/serve-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    DepartmentDetailComponent,
    ServeErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ServeErrorComponent } from './serve-error/serve-error.component';

const routes: Routes = [
  {path : '', redirectTo:"department",pathMatch:"full"},
  {path:"department",component: DepartmentComponent },
  {path:"department/:id",component:DepartmentDetailComponent},
  {path:"employee",component: EmployeeComponent},
  {path:"**",component:ServeErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

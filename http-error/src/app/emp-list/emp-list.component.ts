import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employees:any=[]
  public errorMsg:any;

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): any{
    this.employeeService.getEmployee().subscribe({next:(data) => {this.employees=data},
      error:(erorr) => {this.errorMsg=erorr}
  })
}

}

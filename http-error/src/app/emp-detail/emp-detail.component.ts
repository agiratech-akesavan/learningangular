import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees:any=[];
  public erroMsg:any;
  constructor(public employeeService:EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe({next:(data)=>{this.employees=data},error:(error)=>this.erroMsg=error});
  }
}

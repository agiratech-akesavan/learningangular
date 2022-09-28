import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees:any=[];
  constructor( public _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployee();
  }

}

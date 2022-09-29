import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public value:any=[
    {"id":1,"longuage":"angular"},
    {"id":2,"longuage":"react"},
    {"id":3,"longuage":"fluter"},
    {"id":4,"longuage":"vue.js"},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(){
    this.router.navigate(["/employee"]);
    // console.log("hello");
  }

}

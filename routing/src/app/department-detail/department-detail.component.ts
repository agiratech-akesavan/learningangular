import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public value:any=[
    {"id":1,"longuage":"angular"},
    {"id":2,"longuage":"react"},
    {"id":3,"longuage":"fluter"},
    {"id":4,"longuage":"vue.js"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

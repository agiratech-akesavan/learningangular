import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-class-property',
  template:` 
      <h1>{{name}}</h1>
      <h3 class="text-danger">Static type of the class property</h3>
      <h3 [class]="successProperty">Dynamic type class binding</h3>
      <h3 [ngClass]="info">This method applying the in object type of the css property.</h3>
      <hr>
  `,
  styleUrls: ['./class-property.component.css']
})
export class ClassPropertyComponent implements OnInit {

  public name:string="Class property binding"
  public successProperty:String="text-success"
  public hasError=false;
  public hasCorrect=true;
  // public style:string="text-style";
  // public firstletter="first-style";

  //this method used the object type css value will be input in the html element.
  //the class name set by the [ngClass].


  public info={
    "text-success":!this.hasError,
    "first-letter":this.hasCorrect,
    "text-style":this.hasCorrect,
  }

  constructor() { }

  ngOnInit(): void {
  }

}

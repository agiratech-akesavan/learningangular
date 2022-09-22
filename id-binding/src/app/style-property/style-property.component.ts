import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-style-property]',
  template:`
    <h1 [style.textAlign]="'center'">Style binding</h1>

    <h3 [style.color]="'red'">Style binding</h3>

    <h3 [style.color]="hasError ? 'red' : 'green'">Conditional checking</h3>

    <h3 [ngStyle]="info">object value of the input</h3>
    <hr>
  
  `,
  styleUrls: ['./style-property.component.css']
})
export class StylePropertyComponent implements OnInit {

  public hasError:boolean=false;

  public info={
    color:"red",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

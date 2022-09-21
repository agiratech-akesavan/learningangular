import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter',
  template:`
    <h3>{{name}}</h3>
    <p>{{getvalue().toUpperCase()}}</p>
    <p>{{2+2}}</p>
  `,
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit {

  public name="The meaning of the interpolation is it's convert the typescript file into HTML element";
  private value="angular"

  constructor() { }

  ngOnInit(): void {
  }

  getvalue(){
    return this.value;
  }

}

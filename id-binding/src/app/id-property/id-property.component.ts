import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-property',
  template: `
      <h1>Bind property</h1>
      <p>Bind mean the the value i will be set by the class and it's is dynamic type.</p>
      <input type="text" value="search..."><br><br>
      <input [disabled]="hasError">
      <hr>
  `,
  styleUrls: []
})
export class IdPropertyComponent implements OnInit {

  public hasError=true;// Based on the input of the hasError value it's abled or disabled. 

  constructor() { }

  ngOnInit(): void {
  }

}

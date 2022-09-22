import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  public value:any;

  constructor() { }

  ngOnInit(): void {
  }


  logmessage(val:any){
    this.value=val;
  }
 
}

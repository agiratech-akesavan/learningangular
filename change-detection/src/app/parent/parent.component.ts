import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  number:number=0;
  constructor() { }

  ngOnInit(): void {
    console.log("parent detector")
  }
  
  increment(){
    this.number++;
  }

}

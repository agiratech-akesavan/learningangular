import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-property',
  templateUrl: './event-property.component.html',
  styleUrls: ['./event-property.component.css']
})
export class EventPropertyComponent implements OnInit {
  
  public greeting:string="";
  constructor() { }

  ngOnInit(): void {
  }

    getName(){
      console.log("hello");
      this.greeting="WelCome";
    }
}

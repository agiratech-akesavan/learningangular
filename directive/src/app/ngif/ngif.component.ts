import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {


  public value=false;

  public input=true;

  public inputs=true;

  constructor() { }

  ngOnInit(): void {
  }

}

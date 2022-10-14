import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpure-pipe',
  templateUrl: './inpure-pipe.component.html',
  styleUrls: ['./inpure-pipe.component.css']
})
export class InpurePipeComponent implements OnInit {

  constructor() { }

  public value=56;

  ngOnInit(): void {
  }

}

import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit,AfterViewInit,AfterViewChecked{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("child after view init initialized");
  }

  ngAfterViewChecked(): void {
    console.log("child after view checked");
  }
}

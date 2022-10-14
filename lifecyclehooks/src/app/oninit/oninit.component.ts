import { Component, Input, OnInit,OnDestroy, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css']
})
export class OninitComponent implements OnInit,OnDestroy,OnChanges, AfterViewInit,AfterViewChecked{ 

  @Input("parent") public name:any;

  ngOnChanges(){
    console.log("input will be change")
  }

  ngAfterViewInit(): void {
    console.log("parent after view init initiailied");
  }

  ngAfterViewChecked(): void {
    console.log("parent after view check")
  }

  ngOnInit(){
    console.log("ngOnInit is initialized");
  }

  ngOnDestroy(): void {
    console.log("Component will be destroyed")
  }
}

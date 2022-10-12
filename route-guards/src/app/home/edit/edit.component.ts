import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeBoolean:boolean=false;
  change(name:any){
    if(name == ""){
      this.changeBoolean=false;
    }else{
      this.changeBoolean=true;
    }
  }

  canActive(changeBoolean:any){
    if(confirm("You are not save the update value.You want navigate it.")){
      return true;
    }else{
      return false;
    }
  }
  

}

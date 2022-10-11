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
  changeBoolean=false;
  change(name:any){
    if(name == ""){
      this.changeBoolean=false;
    }else{
      this.changeBoolean=true;
    }
  }

}

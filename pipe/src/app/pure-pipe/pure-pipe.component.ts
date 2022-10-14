import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.css']
})
export class PurePipeComponent implements OnInit {

  constructor() { }

  public date=new Date();

  public num=2223.209;

  public name="hello WoRld"

  public arr=[0,1,2,3,4,5]

  ngOnInit(): void {
  }

}

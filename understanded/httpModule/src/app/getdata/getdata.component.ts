import{ HttpGetService } from "../service/http-get.service"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  public user:any;

  constructor( private service:HttpGetService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data =>{
      this.user=data;
    })
  }

}

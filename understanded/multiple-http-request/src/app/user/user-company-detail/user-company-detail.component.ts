import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetHttpService } from 'src/app/service/get-http.service';

@Component({
  selector: 'app-user-company-detail',
  templateUrl: './user-company-detail.component.html',
  styleUrls: ['./user-company-detail.component.scss']
})
export class UserCompanyDetailComponent implements OnInit,OnDestroy {

  constructor(public service:GetHttpService,public route:Router) { }
  public subscribe:any;
  public dataSource:any;
  public displayedColumns:string[]=["id","name","company","website"];

  ngOnInit(): void {
    this.subscribe=this.service.getData().subscribe(data=>this.dataSource=data);
  }

  ngOnDestroy(): any {
    this.subscribe.unsubscribe();
  }
  address(){
    this.route.navigate(['user/address'])
  }

  contact(){
    this.route.navigate(['user/contact'])
  }

  detail(){
    this.route.navigate(['user'])
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetHttpService } from 'src/app/service/get-http.service';

@Component({
  selector: 'app-user-contact-detail',
  templateUrl: './user-contact-detail.component.html',
  styleUrls: ['./user-contact-detail.component.scss']
})
export class UserContactDetailComponent implements OnInit,OnDestroy {

  public subscribe:any;
  public dataSource:any;
  public displayedColumns:string[]=["id","name","email","contact"];
  constructor(public service:GetHttpService,public route:Router) { }

  ngOnInit(): void {
    this.subscribe=this.service.getData().subscribe(data => this.dataSource=data);
  }
  ngOnDestroy(): void {
        this.subscribe.unsubscribe();
  }

  address(){
    this.route.navigate(['user/address'])
  }

  company(){
    this.route.navigate(['user/company'])
  }
  detail(){
    this.route.navigate(['user'])
  }
}

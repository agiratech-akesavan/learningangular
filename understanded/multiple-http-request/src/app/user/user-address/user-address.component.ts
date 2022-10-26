import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GetHttpService } from 'src/app/service/get-http.service';

// export interface address{
//   name:string;
//   address:string[];
// } 

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit,OnDestroy {
  public subscibe:any
  public data:any;
  displayedColumns:string[]=["id","name","address","zipcode"];


  constructor(public service:GetHttpService,public route:Router) { 
  }
  
  ngOnInit() {  
    this.subscibe=this.service.getData().subscribe(data=>this.data=data);
  }

  ngOnDestroy(): void {
    this.subscibe.unsubscribe();
  }

  company(){
    this.route.navigate(['user/company'])
  }

  contact(){
    this.route.navigate(['user/contact'])
  }
  detail(){
    this.route.navigate(['user'])
  }
}

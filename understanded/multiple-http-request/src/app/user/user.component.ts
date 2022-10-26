import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetHttpService } from '../service/get-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {

  public subscribe:any;
  public users:any;
  constructor(private service:GetHttpService,public route:Router) { }

  ngOnInit(): void {
      this.subscribe=this.service.getData().subscribe(data=>this.users=data);
  }

  ngOnDestroy(): void {
      this.subscribe.unsubscribe();
  }

  person(user:any){
    this.route.navigate(['user/person',user.id]);
  }

}

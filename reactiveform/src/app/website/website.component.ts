import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  public username:any;
  public items:any=[];
  constructor(public route:Router,public product:ProductService,private userNameService:UsernameService) { }

  ngOnInit(): void {
    this.items=this.product.item;
    this.userNameService.UserName.subscribe(data => {
      this.username=data;
      console.log(data);
    })
  }
  prod(item:any){
    this.route.navigate(['website/product/',item.id]);
  }

}

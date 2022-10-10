import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  public items:any=[];
  constructor(public route:Router,public product:ProductService) { }

  ngOnInit(): void {
    this.items=this.product.item;
  }
  prod(item:any){
    this.route.navigate(['website/product/',item.id]);
  }

}

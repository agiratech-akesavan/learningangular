import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any;
  productid:any;
  constructor(public activeroute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.productid=(this.activeroute.snapshot.params["id"]);
    this.product=(this.productService.item.find(x => x.id == this.productid));
  }

}

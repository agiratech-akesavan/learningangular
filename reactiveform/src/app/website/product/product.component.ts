import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { UsernameService } from 'src/app/service/username.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public card=0;
  product:any;
  productid:any;
  constructor(public activeroute:ActivatedRoute,private productService:ProductService,private bService:UsernameService) { }

  ngOnInit(): void {
    this.productid=(this.activeroute.snapshot.params["id"]);
    this.product=(this.productService.item.find(x => x.id == this.productid));
  }

  addcard(){
    this.card++;
    this.bService.send(this.card);
    // console.log(this.card);
  }
}

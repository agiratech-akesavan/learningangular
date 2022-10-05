import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

item=[
    {"id":"101","productName":"Electronics","image":"https://www.eiosys.com/wp-content/uploads/2021/12/without-text-Top-Online-Electronics-Shopping-Websites-in-India.png"},
    {"id":"102","productName":"Clothes","image":"../../assets/image/clothes.jpg"},
    {"id":"103","productName":"Shoes","image":"../../assets/image/shoes.jpg"}
]
}

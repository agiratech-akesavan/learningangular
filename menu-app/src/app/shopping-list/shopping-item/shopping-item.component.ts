import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shopping.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  public ingredients:Ingredient[]=[
    new Ingredient("apple",5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

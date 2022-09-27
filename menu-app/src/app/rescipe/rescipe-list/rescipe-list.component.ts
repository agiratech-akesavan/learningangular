import { Component, OnInit } from '@angular/core';

import { Rescipe} from '../rescipe.model';

@Component({
  selector: 'app-rescipe-list',
  templateUrl: './rescipe-list.component.html',
  styleUrls: ['./rescipe-list.component.css']
})
export class RescipeListComponent implements OnInit {

 public rescipes: Rescipe[]=[
    new Rescipe("A test rescipe","this the simple test","https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706__340.jpg"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

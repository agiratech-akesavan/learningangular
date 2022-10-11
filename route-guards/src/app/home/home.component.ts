import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  page(){
    this.route.navigate(["home/user-detail"])
    // console.log("hello")
  }
  // edit(){
  //   this.route.navigateByUrl("home/edit");
  // }
 
}

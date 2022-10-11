import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  output(value:any,role:any){
    // console.log("hello")
    localStorage.setItem("user",value);
    localStorage.setItem("role",role);
    this.route.navigate(["/home"])
  }
}

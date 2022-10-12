import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  // login=new FormGroup({
  //   user:new FormControl(""),
  //   password:new FormControl("")
  // }) 
  ngOnInit(): void {
  }

  public userName:any;

  output(value:any){
    localStorage.setItem("username",value);
    // this.userName=value;
    // console.log(this.userName)
    // localStorage.setItem('bgcolor', 'red');
    // alert("The Login successfully completed")
  }

  website(){
    this.route.navigate(['/website'])
  }

  page(){
    this.route.navigate(['/sign']);
  }


}

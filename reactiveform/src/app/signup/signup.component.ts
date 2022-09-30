import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router) { }

  login=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl(''),
    retypepassword:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl('')
  });

  ngOnInit(): void {
  }

  get firstName():any{
    return this.login.get("firstName")
  }

  get lastName():any{
    return this.login.get("lastName");
  }

  // get email():any{
  //   return this.login.get("email");
  // }

  value(){
    this.route.navigate(['/login'])
    // console.log("hello")
  }

  output(value:any){
    console.log(value);
  }

}

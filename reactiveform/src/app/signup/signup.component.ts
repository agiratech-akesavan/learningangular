import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public genderValue:any=[{"name":"male"},{"name":"female"}]
  constructor(private route:Router) { }

  login=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    retypepassword:new FormControl('',[Validators.required]),
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
  get email():any{
    return this.login.get("email");
  }
  get gender():any{
    return this.login.get("gender");
  }
  get password():any{
    return this.login.get("password");
  }
  get retypepassword():any{
    return this.login.get("retypepassword");
  }




  value(){
    this.route.navigate(['/login'])
    // console.log("hello")
  }

  output(value:any){
    console.log(value);
  }

}

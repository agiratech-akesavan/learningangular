import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userlogin(){
    return localStorage.getItem("user")!=null;
  }

  role(){
    if(localStorage.getItem("role") == "admin"){
      return true;
    }else{
      return false;
    };
  }

}

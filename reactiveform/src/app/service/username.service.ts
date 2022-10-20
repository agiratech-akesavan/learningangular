import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  constructor() { }

  private user=new BehaviorSubject<string>("");
  UserName=this.user.asObservable();

  send(Name:any){
    this.user.next(Name);
    console.log(this.UserName);
  }
}

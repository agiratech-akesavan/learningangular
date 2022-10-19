import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  public bSubject=new BehaviorSubject("Hello");
  constructor() { }

  sendingbSubject(data:any){
    this.bSubject.next(data);
  }
}

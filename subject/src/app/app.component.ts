import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subject';

  constructor(){}

  ngOnInit(){

    const subject=new Subject<number>();
    subject.subscribe(d => console.log(d)); //Only return the before given in the next value.
    subject.next(200);
    subject.subscribe(d=>console.log(d)); //Doesn't return the value of the next give the subscribe.

    //But the BehaviourSubject is returnt the after given next subscribe  always return  the output.
    
    

    const behaviourSubject=new BehaviorSubject<string>("hello"); //BehaviourSubject always given the initial value.

    behaviourSubject.next("How are You");

    behaviourSubject.subscribe(data=>{
      console.log(data);
    })                                     //This main difference of the behaviourSubject and the subject.
  } 
}

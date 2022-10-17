import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'custom-observable';

  public clock:number=new Date().getSeconds();
  // observable:Subscriber;
  
  ngOnInit(){
    // console.log(this.clock);
    let customObservable=Observable.create((observaber:any)=>{
      setInterval(()=>{
        observaber.next(this.clock);
        let completed=this.clock+3;
        // console.log(completed);
        if(this.clock == 60){
          observaber.error("the seconds is correct 60s");
        }
        if(completed == this.clock){
          observaber.complete();
        }
        this.clock++;
      },1000);
    })

    customObservable.subscribe((data:any)=>{
      console.log(data);
    },(err:any)=>{
      console.log("The error massage:"+err)
    },(complete:any)=>{
      console.log("The Function will be completed");
    }   
    )
  }
}

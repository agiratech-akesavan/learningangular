import { Component } from '@angular/core';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';

  value=[
    {name:"javascrit"},
    {name:"angular"},
    {name:"react"}
  ]

  promise=new Promise((resolve) => {
    resolve("promise observable is working");
    // reject(""
  })

  observable=from(this.value);

  promiseObservable=from(this.promise);

  constructor(){
    this.observable.subscribe(
      {next: (data:any) => console.log(data),
        error:(err:any)=>console.error(err),
        complete:()=> console.log("obsevable is completed")
      
      },
    )

    this.promiseObservable.subscribe({
      next: (data:any) => console.log(data),
        error:(err:any)=>console.error(err),
        complete:()=> console.log("promise obsevable is completed")
    })
  }

}

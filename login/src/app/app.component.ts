import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  myFunc(value:any){
    if(value.length >0){
      alert("User name is "+value);

    }
  }
}

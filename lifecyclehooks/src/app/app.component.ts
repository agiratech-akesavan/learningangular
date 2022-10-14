import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:any="angular";

  show:boolean=false;

  toggle(){
    this.show=!this.show;
  }
}

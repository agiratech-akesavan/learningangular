
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public loadoutput:Post[]=[];
  
  constructor(public http:HttpClient){}
  title = 'httprequest-firebase';
  
  ngOnInit(){
    this.getData();
    // this.loadoutput;
  }

  output(value:Post){
    this.http.post("https://http-request-7e754-default-rtdb.firebaseio.com/post.json",value)
    .subscribe(posts=>console.log(posts));
  }


  fetch(){
    this.getData(); 
  }

  private getData(){
    this.http.get<{[key:string]:Post}>("https://http-request-7e754-default-rtdb.firebaseio.com/post.json").pipe(
      map((responseData) => {
        const postsArray:Post[] = [];
        for(let key in responseData){
          postsArray.push({...responseData[key]})
        }
        return postsArray;
      })
    )
    .subscribe(posts => {
      this.loadoutput=posts;
    });
 
  }

}

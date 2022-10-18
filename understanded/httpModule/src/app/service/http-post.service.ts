import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface dataUser{
  name:string;
  age:number;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  constructor(private http:HttpClient) { }

  postData(body:any):Observable<dataUser>{
    return this.http.post<dataUser>("https://jsonplaceholder.typicode.com/posts",body);
  }


}

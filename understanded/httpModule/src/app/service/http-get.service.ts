import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface userData{
  name:string;
  age:number;
  email:string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpGetService {

  constructor(private http:HttpClient) { }
  getData():Observable<userData>{
    return this.http.get<userData>("https://jsonplaceholder.typicode.com/users")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url:string="/assets/data/employee.json";
  constructor(public http:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
}

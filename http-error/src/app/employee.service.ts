import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url:string="/assets/data/employee.json";
  public data:any;
  public error:any;
  constructor(private _httpClient:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this._httpClient.get<IEmployee[]>(this.url)
    .pipe(catchError(this.errorHandler) );
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(() => error.message || "Server error");
    
  }
}

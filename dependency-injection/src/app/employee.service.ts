import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee():any{
    return [
      {
        "userId":"rirani",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "age":55
        },
        {
        "userId":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "age":40
        },
        {
        "userId":"thanks",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "age":25
        }
    ];
  }
}

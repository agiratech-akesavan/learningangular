import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../service/http-post.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private service:HttpPostService) { }

  ngOnInit(): void {
  }

  output(form:any){
    // console.log(form);
    const postBody={
      name:form.name,
      age:form.age,
      email:form.email,
    }
    this.service.postData(postBody).subscribe(data=>{
      alert("successfull data send"),(err:any)=>{
        console.log("this is error",err);
      }
    });

    
  }

}

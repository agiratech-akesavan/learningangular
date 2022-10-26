import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetHttpService } from 'src/app/service/get-http.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit,OnDestroy {
  
  public subscribe:any;
  public userId:any;
  public person:any;
  public personss:any;
  
  constructor(public service:GetHttpService,public activeroute:ActivatedRoute,public route:Router) { 
    
  }

  ngOnInit(): any {
    this.userId=this.activeroute.snapshot.params['id'];
    let persons:any;
    this.subscribe=this.service.getData().subscribe(data=>{
      return persons = data,
      this.personss=persons.find((x:any)=>x.id == this.userId) 
    });
    
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  detail(){
    this.route.navigate(["user"]);
  }

}

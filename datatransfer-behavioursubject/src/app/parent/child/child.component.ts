import { Component, OnInit } from '@angular/core';
import { BehaviourSubjectService } from 'src/app/service/behaviour-subject.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public service:BehaviourSubjectService) { }

  ngOnInit(): void {
  }

  output(input:any){
      this.service.sendingbSubject(input);
  }
}

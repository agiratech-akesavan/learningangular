import { Component, OnInit } from '@angular/core';
import { BehaviourSubjectService } from '../service/behaviour-subject.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {


  public input:any;

  constructor(public service:BehaviourSubjectService) { }

  ngOnInit(): void {
    this.service.bSubject.subscribe(data => {
      this.input=data;
    })
  }

}

import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("parentData") public name:any;
  @Input ("inputage") public inputage:any;
  @Output() public childEvent=new EventEmitter();
  @Output() public input=new EventEmitter();
  public age:number=27;
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.input.emit("k7");
    this.childEvent.emit(this.age);
  }

}

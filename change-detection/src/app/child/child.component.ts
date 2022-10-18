import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  constructor(private changeRef:ChangeDetectorRef) { }
  clock:any;
  ngOnInit(): void {
  }

  value(){
    setInterval(()=>{
      let value=new Date();
      this.clock=value.getSeconds();
      // this.changeRef.markForCheck();
    },1000);
    // return "child"
  }


}

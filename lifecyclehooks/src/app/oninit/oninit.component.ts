import { Component, OnInit,Input,OnDestroy,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css']
})
export class OninitComponent implements OnInit,OnDestroy,OnChanges {

  @Input('name') public name:any;
 timeinterval:any =null;
  constructor() { }

  ngOnChanges(changes:any): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("onInit is working")

    // this.timeinterval = setInterval(()=>{
    //   console.log(new Date());
    // },1000);
  }

  ngOnDestroy(): void {
    console.log("onDestroy");
    if(this.timeinterval){
      clearInterval(this.timeinterval);
    };
  }

}

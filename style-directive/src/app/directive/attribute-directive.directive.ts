import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective implements OnInit {

  constructor(public elementRel:ElementRef,public renderer:Renderer2) { }

  ngOnInit(): void {

    this.elementRel.nativeElement.style.backgroundColor="blue";
    
    // this.renderer.setStyle(this.elementRel.nativeElement,"background-color","red");
    
  }

}

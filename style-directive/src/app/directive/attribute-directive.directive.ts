import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective implements OnInit {

  constructor(public elementRel:ElementRef) { }

  ngOnInit(): void {

    this.elementRel.nativeElement.style.backgroundColor="blue";
    
  }

}

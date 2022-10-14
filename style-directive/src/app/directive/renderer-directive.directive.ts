import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit {

  constructor(public elementRel:ElementRef,public renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRel.nativeElement,"color","red")
  }
}

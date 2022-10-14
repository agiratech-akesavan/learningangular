import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(public elRef:ElementRef) {
   }

  @Input() appHost='';
  @Input() defaultColor = '';


  @HostListener('mouseenter') onMouseEnter(){
    this.hoverColor(this.appHost || this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverColor('');
  }

  private hoverColor(color:string){
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}

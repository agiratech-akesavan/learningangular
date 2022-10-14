import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[dropdown]',
})


export class DropDown {
    @HostBinding("class.open") isOpen=false;

    @HostListener("click") toggleOpen(){
        this.isOpen=true;
    }
}
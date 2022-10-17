import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[dropdown]',
})


export class DropDown {
    @HostBinding("class.open") isOpen=false;

    @HostListener("click") click(){
        this.isOpen=!this.isOpen;
        console.log("hello")
    }
}
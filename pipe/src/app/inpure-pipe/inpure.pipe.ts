import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:"append"
})


export class AppendPipe implements PipeTransform{
    transform(value:any) {
        return value + "%";
    }
}


@Pipe({
    name:"inpure",
    pure:false // inpure pipe working like the lifecycle hooks ngOnChange. so the small change of the web application in initiate the pipe
})

export class inpurePipe implements PipeTransform {
    transform(value: any) {
        console.log("inpure");
    }
}
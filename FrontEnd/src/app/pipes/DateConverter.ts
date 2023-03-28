import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"DateConverter"
})

export class DateConverter implements PipeTransform {
    transform (value: any, ...args:any[]) :any {
        let time:Date = new Date(value)
        console.log(time.toString())
        return time;
    }
}
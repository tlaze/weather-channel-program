import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"DateConverter"
})
export class DateConverter implements PipeTransform {
    transform (value: string, ...args:any[]) :any {
        let time:Date = new Date(value + "Z")
        let timeHours:number = time.getHours()
        if (timeHours == 23) return "12 AM"
        if (timeHours>11) return ((timeHours%11)+1) + " PM"
        return timeHours+1 + " AM";
    }
}
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'TempConverter'
})

export class TempConverter implements PipeTransform {
    transform(value:any, ...args: any[]): any {
        return ((value-273.15) * (9/5) + 32).toFixed(0)
    }
}
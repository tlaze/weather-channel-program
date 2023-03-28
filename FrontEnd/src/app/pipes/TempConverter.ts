import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'TempConverter'
})

export class TempConverter implements PipeTransform {
    transform(value:any, ...args: any[]): any {
        return (value).toFixed(0) + " F"
    }
}
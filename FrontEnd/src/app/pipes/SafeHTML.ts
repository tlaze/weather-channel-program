import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe ({
    name:"SafeHtml"
}) 
export class SafeHTML implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(value: any, ...args: any[]) {
        return this.sanitizer.bypassSecurityTrustHtml(value)
    }
}
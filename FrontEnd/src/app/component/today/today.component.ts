import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  @Input() weather:any;
  @Input() locationID:number|undefined
  consol() {
    console.log(this.weather);
  }
  // Icon list: https://www.angularjswiki.com/fontawesome/weather/
  getIcon(climate:string) : string {
    if (climate == "sky") {
      return "fas fa-sun "
    }
    if (climate=="rain") return "fas fa-cloud-rain"
    if (climate =="clouds") return "fas fa-cloud "
    return ""
  }
  getColor(climate:string) :string {
    if (climate == "sky") {
      return "yellow"
    }
    if (climate=="rain") return "blue"
    if (climate =="clouds") return "grey"
    return ""
    
  }

}

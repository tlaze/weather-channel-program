import { Component, Input } from '@angular/core';
import { HourlyWeather } from 'src/app/models/HourlyWeather';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent {
  @Input() weather:any;
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

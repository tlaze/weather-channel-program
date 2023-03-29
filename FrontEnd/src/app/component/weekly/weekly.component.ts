import { Component,Input } from '@angular/core';
import { WeeklyWeather } from 'src/app/models/WeeklyWeather';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {
  @Input() weather:any;
  consol(){
  console.log(this.weather);
  }

  getIcon(climate:string) : string {
    if (climate.includes("clear")) {
      return "fas fa-sun";
    }
    else if (climate.includes("cloud")){
    return "fas fa-cloud";
    }
    else if (climate.includes("rain") || climate.includes("mist")){
    return "fas fa-cloud-rain";
    }
    else if(climate.includes("thunder")){
    return "fas fa-bolt";
    }
    else if(climate.includes("snow")){
    return "fas fa-snowflake";
    }
    else{
    return "";
    }
  }
  getFahrenheit(temp:any){
    return Math.ceil(((temp * 1.8) + 32)) + " F";
  }
}

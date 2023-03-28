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

}

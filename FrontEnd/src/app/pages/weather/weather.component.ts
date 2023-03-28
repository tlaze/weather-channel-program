import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { HourlyWeather } from 'src/app/models/HourlyWeather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  hourlyWeather: any;
  weather: any;
  forecastWeather:any;

  constructor(
    private route:ActivatedRoute,
    private weatherService : WeatherService){}

    ngOnInit() {
     console.log(this.route.queryParams);
      this.route.queryParams.subscribe(params => {
      this.weatherService.getWeather(params['lat'], params['lon'], "hourly").subscribe(temp => {
        console.log("TEMP:", temp)
        this.hourlyWeather = temp;      
      })
     });
      
    }
}

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
      console.log(params);
      this.weatherService.getWeather(params['lat'], params['lon'], params['hourly']).subscribe((temp: any) => {

      console.log(temp);
      temp.sys.sunrise = new Date(temp.sys.sunrise * 1000);
      temp.sys.sunset = new Date(temp.sys.sunset * 1000);
      this.weather = temp;
      });
      
    });
  }
}

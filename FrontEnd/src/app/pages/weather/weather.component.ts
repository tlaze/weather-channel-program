import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  hourlyWeather: any;
  currentWeather: any;
  forecastWeather:any;

  constructor(
    private route:ActivatedRoute,
    private weatherService : WeatherService){}

    ngOnInit() {
     console.log(this.route.queryParams);
      this.route.queryParams.subscribe(params => {
      console.log(params);
      this.weatherService.getWeather(params['lat'], params['lon'], params['hourly']).subscribe(temp => {
        console.log(temp)
        this.hourlyWeather = temp;      
      })
      // this.weatherService.getWeather(params['lat'], params['lon'], "weekly").subscribe(temp => {
      //   this.hourlyWeather = temp;      
      // })
      // this.weatherService.getWeather(params['lat'], params['lon'], "15 day").subscribe(temp => {
      //   this.hourlyWeather = temp;      
      // })


     });
      
    }
}

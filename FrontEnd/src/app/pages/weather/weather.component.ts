import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { HourlyWeather } from 'src/app/models/HourlyWeather';
import { WeeklyWeather } from 'src/app/models/WeeklyWeather';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  hourlyWeather: any;
  weather: any;
  weeklyWeather:any;
  locationID:number|undefined
  favorite:string|undefined

  constructor(
    private route:ActivatedRoute,
    private weatherService : WeatherService, 
    private locationService: LocationService){}
    checkFavorite() {
      return  this.favorite
    }
    consol() {
      console.log( typeof this.favorite)
    }
    toggleFavorite() {
      this.locationService.toggleFavorite(this.locationID as number).subscribe(json => {        
        this.favorite = this.favorite=='true' ? 'false' : 'true';
      });

    }

    ngOnInit() {
     console.log(this.route.queryParams);
      this.route.queryParams.subscribe(params => {        
      this.locationID = params["locationID"]
      this.favorite = params["favorite"]
      console.log("FAVORITE",this.favorite)
      this.weatherService.getWeather(params['lat'], params['lon'], params['hourly']).subscribe((temp: any) => {
      temp.sys.sunrise = new Date(temp.sys.sunrise * 1000);
      temp.sys.sunset = new Date(temp.sys.sunset * 1000);
      let currentDate = new Date();
      temp.isDay = temp.sys.sunrise.getTime() < currentDate.getTime() && currentDate.getTime() < temp.sys.sunset.getTime();
      this.weather = temp;
      });
        this.weatherService.getWeather(params['lat'], params['lon'], "hourly").subscribe(temp => {
          console.log("TEMP:", temp);
          this.hourlyWeather = temp;
        })
        console.log(params);
        this.weatherService.getWeather(params['lat'], params['lon'], "15 day").subscribe(temp => {
          console.log("Weekly: ", temp);
          this.weeklyWeather = temp;
        })
      })
    }
}

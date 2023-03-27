import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/models/location.module';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html', 
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  city : String = "";
  state: String = "";
  zip: String = "";
  error:String="";
  timeFrame:string = "hourly";
  constructor(private weatherService : WeatherService,
              private router: Router){}
  
  convert(value: number|undefined) : number {
    return value as number;
  }

  changeTime(timeFrame:string) {
    this.timeFrame = timeFrame;
  }

  submit() : void {
    if (this.zip !== "") {
      this.weatherService.getLocationZip(this.zip).subscribe(data=> {
        let a :Location = data;
        console.log(a)
        this.router.navigate(['/weather'], {queryParams: {
          lat: this.convert(a.lat),
          lon: this.convert(a.lon)
        }});
        // this.weatherService.getWeather(this.convert(a.lat), this.convert(a.lon)).subscribe(temp => {
        //   console.log(temp)
        // })
      })
    } else if (this.city !== "" && this.state !== "") {
      this.weatherService.getLocationCityState(this.city, this.state).subscribe(data => {
        let a : Location[] = data;
        this.router.navigate(['/weather']);
        // this.weatherService.getWeather(this.convert(a[0].lat), this.convert(a[0].lon)).subscribe(temp => {
        //   console.log(temp)
        // });
      });
    } else {
      this.error = "Please fill out the inputs"
    }
  }
}

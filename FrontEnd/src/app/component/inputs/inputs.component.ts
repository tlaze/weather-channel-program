import { Component } from '@angular/core';
import { Location } from 'src/app/models/location.module';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  city : String = "";
  state: String = "";
  zip: String = "";
  error:String="";
  constructor(private weatherService : WeatherService){}

  convert(value: number|undefined) : number {
    return value as number;
  }

  submit() : void {
    if (this.zip !== "") {
      this.weatherService.getLocationZip(this.zip).subscribe(data=> {
        let a :Location = data;
        console.log(a)
        this.weatherService.getWeather(this.convert(a.lat), this.convert(a.lon)).subscribe(temp => {
          console.log(temp)
        })
      })
    } else if (this.city !== "" && this.state !== "") {
      this.weatherService.getLocationCityState(this.city, this.state).subscribe(data => {
        let a : Location[] = data;
        this.weatherService.getWeather(this.convert(a[0].lat), this.convert(a[0].lon)).subscribe(temp => {
          console.log(temp)
        });
      });
    } else {
      this.error = "Please fill out the inputs"
    }
  }
}

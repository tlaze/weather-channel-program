import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // Michaels Key: be48583d2851b91aa0e1e65766875064
  // VIsual Crossing: DAL7VELFH2K3V3SX4BXEVLVY5
  apiKey = 'be48583d2851b91aa0e1e65766875064';
  crossingKey = "DAL7VELFH2K3V3SX4BXEVLVY5";

  constructor(private http: HttpClient) { }
  getLocationZip(zip:String):Observable<Location>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    let observableLocation = this.http.get<Location>(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${this.apiKey}`, {headers:header});
    return observableLocation;
  }
  getLocationCityState(city:String, state:String):Observable<Location[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    let observableLocation = this.http.get<Location[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${this.apiKey}`, {headers:header});
    // observableLocation.subscribe(js=> console.log(js[0]))
    return observableLocation;
  }
  getWeather(lat:number, long:number, timeFrame:string) : Observable<Object>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    console.log(lat, long, timeFrame)
    if (timeFrame=="hourly") return this.http.get<Object>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${this.apiKey}`)
    if (timeFrame=="15 day") return  this.http.get<Object>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${long}?unitGroup=metric&key=DAL7VELFH2K3V3SX4BXEVLVY5&contentType=json`)
    return this.http.get<Object>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}`)
  }
}

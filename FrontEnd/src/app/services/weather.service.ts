import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getLocationZip(zip:String):Observable<Location>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    let observableLocation = this.http.get<Location>(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=be48583d2851b91aa0e1e65766875064`, {headers:header});
    return observableLocation;
  }
  getLocationCityState(city:String, state:String):Observable<Location[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    let observableLocation = this.http.get<Location[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=be48583d2851b91aa0e1e65766875064`, {headers:header});
    // observableLocation.subscribe(js=> console.log(js[0]))
    return observableLocation;
  }
  getWeather(lat:number, long:number) : Observable<Object>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    console.log(lat, long)
    return this.http.get<Object>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=be48583d2851b91aa0e1e65766875064`, {headers:header});

  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http :HttpClient) { }
  getLocationByID(id:number ) : Observable<Location[]> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Location[]>(`http://127.0.0.1:9000/locations/${id}`, {headers:header});
  }
  getFavoritesByID(id:number ) : Observable<Location[]> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Location[]>(`http://127.0.0.1:9000/locations/${id}/favorites`, {headers:header});
  }
}
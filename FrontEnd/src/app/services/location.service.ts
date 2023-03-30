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
    return this.http.post<Location[]>(`http://127.0.0.1:9000/account/${id}`, {headers:header});
  }
}

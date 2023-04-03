import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location.module';

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
  toggleFavorite(id:number) : Observable<Location> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Location>(`http://127.0.0.1:9000/locations/${id}`, {headers:header});

  }

  addLocation(location: Location): Observable<Location> {
    console.log("addlocation is called")
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    console.log(location)
    return this.http.post<Location>('http://127.0.0.1:9000/location', location, {headers: header});
  }  
}

import { Component, OnInit} from '@angular/core';
import { Location } from 'src/app/models/location.module';
import { AuthService } from 'src/app/services/auth.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loginID: number;
  location:any[] = []
  favorites:any[]=[];
  lat:number = 0
  lon:number = 0
  constructor(private authService:AuthService, private locationService :LocationService) {
    this.loginID = authService.loginID;
    if (this.loginID != 0) {
      this.locationService.getLocationByID(this.loginID).subscribe(json => {
        this.location = json;
      })
      this.locationService.getFavoritesByID(this.loginID).subscribe(json => {
        this.favorites = json;
      })

    }
  }
  loginCheck() : Boolean {
    return this.authService.isLoggedIn
  }
  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {        
        this.lat = position.coords.latitude
        this.lon =  position.coords.longitude
      })
    }

  }

}

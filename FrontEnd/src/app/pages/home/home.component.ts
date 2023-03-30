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
  location:Location[] = []
  constructor(private authService:AuthService, private locationService :LocationService) {
    this.loginID = authService.loginID;
    if (this.loginID != 0) {

    }
  }
  loginCheck() : Boolean {
    return this.authService.isLoggedIn
  }
  ngOnInit(): void {

  }

}

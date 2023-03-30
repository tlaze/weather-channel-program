import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/location.module';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  @Input()
  userLocations: Location[] = [];
  

  
}

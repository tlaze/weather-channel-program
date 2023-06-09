import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/models/location.module';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  @Input()
  userLocations: Location[] = [];
  @Input()
  locationType: string="";
    
  convert(value: number|undefined) : number {
    return value as number;
  }
  convertBool(value: boolean|undefined) :boolean {
    return value as boolean;
  }
  constructor(private router:Router){}
  
  onSubmit(lat:number|undefined, lon:number|undefined, location:number|undefined, favorites:boolean|undefined) {
    console.log(lat);
    console.log(lon);
    this.router.navigate(['/weather'], {queryParams: {
      lat: this.convert(lat),
      lon: this.convert(lon),
      locationID: this.convert(location),
      favorite:this.convertBool(favorites)
    }});

  }

  ngOnChanges() {
    console.log(this.userLocations)
  }
  

  
}

package com.weather.app.Controller;

import com.weather.app.Model.Location;
import com.weather.app.Service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins={"http://localhost:4200", "http://localhost:9000"}, allowCredentials = "true")
@RestController
public class LocationController {
    LocationService locationService;
    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }
    @PostMapping("location")
    public Location addLocation(@RequestBody Location location) {
        return locationService.addLocation(location);
    }
    @GetMapping("locations")
    public List<Location> getAllLocations(){
        return locationService.getAllLocations();
    }
    @GetMapping("locations/{accountid}")
    public List<Location> getAllLocationsByAccount(@PathVariable int accountid) {
        return locationService.getAllLocationsByAccountid(accountid);
    }
    @GetMapping("locations/{accountid}/favorites")
    public List<Location> getAllFavorites(@PathVariable int accountid) {
        boolean favorite = true;
        return locationService.getAllFavorites(accountid, favorite);
    }
}

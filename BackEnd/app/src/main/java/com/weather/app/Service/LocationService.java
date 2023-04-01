package com.weather.app.Service;

import com.weather.app.Model.Account;
import com.weather.app.Model.Location;
import com.weather.app.Repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {
    LocationRepository locationRepository;
    @Autowired
    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }
    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public List<Location> getAllLocationsByAccountid(int accountid) {
        return locationRepository.findAllByAccountid(accountid);
    }
    public List<Location> getAllFavorites(int accountid, boolean favorite) {
        return locationRepository.findAllByAccountidAndFavorites(accountid, favorite);
    }
    public Location changeLoginStatus(long id) {
        Location newLocation = locationRepository.findById(id).get();
        newLocation.setFavorites(!newLocation.isFavorites());
        locationRepository.save(newLocation);
        return newLocation;
    }

}

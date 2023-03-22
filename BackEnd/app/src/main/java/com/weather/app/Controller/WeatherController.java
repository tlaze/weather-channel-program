package com.weather.app.Controller;

import com.weather.app.Model.Weather;
import com.weather.app.Service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class WeatherController {
    WeatherService weatherService;
    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("weather")
    public Weather getWeather(@RequestBody Weather weather) {
        String apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=be48583d2851b91aa0e1e65766875064";
        //api key be48583d2851b91aa0e1e65766875064
        String lat = weather.getLat();
        String lng = weather.getLng();
        String exclude = "minutely,hourly";
        String url = apiCall.replace("{lat}", lat).replace("{lon}", lng).replace("{part}", exclude);

        return weatherService.getWeather(url);

        //weather api documentation https://openweathermap.org/current

        //http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
        //Option 2. Api call for location.
    }
}
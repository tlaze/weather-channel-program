package com.weather.app.Service;

import com.weather.app.Model.Weather;
import com.weather.app.Repository.WeatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {

    WeatherRepository weatherRepository;
        @Autowired
        public WeatherService(WeatherRepository weatherRepository) {
            this.weatherRepository = weatherRepository;
        }

        public Weather getWeather(String url) {
            return weatherRepository.findbyId(url);
        }
}

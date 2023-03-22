package com.weather.app.Repository;

import com.weather.app.Model.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeatherRepository extends JpaRepository<Weather, Long> {

    Weather findbyId(String url);
}

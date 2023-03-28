package com.weather.app.Repository;

import com.weather.app.Model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
        List<Location> findAllByAccountid(int account);
}

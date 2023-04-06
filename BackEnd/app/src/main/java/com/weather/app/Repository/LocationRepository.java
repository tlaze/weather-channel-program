package com.weather.app.Repository;

import com.weather.app.Model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
        @Query("SELECT u FROM Location u WHERE u.accountid = ?1 ORDER BY u.locationid DESC LIMIT 10")
        List<Location> findAllByAccountid(int account);
        
        @Query("SELECT u FROM Location u WHERE u.accountid = ?1 AND u.favorites = ?2 ORDER BY u.locationid ASC LIMIT 10")
        List<Location> findAllByAccountidAndFavorites(int account, boolean favorite);
}

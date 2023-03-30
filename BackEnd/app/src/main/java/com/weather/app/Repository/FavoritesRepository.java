package com.weather.app.Repository;

import com.weather.app.Model.CompositeKey;
import com.weather.app.Model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorites, CompositeKey> {
    List<Favorites> findByAccountId(long id);
    Favorites findByAccountIdAndZip(long accountId, long zip);
}

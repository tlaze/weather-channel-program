package com.weather.app.Service;

import com.weather.app.Model.CompositeKey;
import com.weather.app.Model.Favorites;
import com.weather.app.Repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesService {
    FavoritesRepository favoritesRepository;
    @Autowired
    public FavoritesService(FavoritesRepository faveRepo) {
        this.favoritesRepository = faveRepo;
    }
    public List<Favorites> getAll() {
        return this.favoritesRepository.findAll();
    }
    public void addFavorites(Favorites fav) {
        this.favoritesRepository.save(fav);
    }
    public List<Favorites> getAllByAccountId(long id) {
        return this.favoritesRepository.findByAccountId(id);
    }
    public Favorites getAllByAccountIdAndZip(long id, long zip) {
        return this.favoritesRepository.findByAccountIdAndZip(id, zip);
    }
}

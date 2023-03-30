package com.weather.app.Controller;

import com.weather.app.Model.Favorites;
import com.weather.app.Service.AccountService;
import com.weather.app.Service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class FavoritesController {
    FavoritesService favoritesService;
    AccountService accountService;
    @Autowired
    public FavoritesController(FavoritesService favoritesService, AccountService accountService) {
        this.favoritesService = favoritesService;
        this.accountService = accountService;
    }
    @PostMapping("favorites")
    public void addFav(@RequestBody Favorites fav) {
        if (this.accountService.getAccountById(fav.getAccountId()) == null) {
            System.out.println(fav);
            return;
        }
        this.favoritesService.addFavorites(fav);
    }
    @GetMapping("favorites")
    public List<Favorites> getAll() {
        return this.favoritesService.getAll();
    }
    @GetMapping("favorites/{id}")
    public List<Favorites> getAllById(@PathVariable long id) {
        return favoritesService.getAllByAccountId(id);
    }
    @GetMapping("favorites/{id}/{zip}")
    public Favorites getAllByIdAndZip(@PathVariable long id, @PathVariable long zip) {
        return favoritesService.getAllByAccountIdAndZip(id, zip);
    }
}

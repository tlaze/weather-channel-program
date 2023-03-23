package com.weather.app.Controller;

import com.weather.app.Model.Account;
import com.weather.app.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class AccountController {
    AccountService accountService;
    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
    @CrossOrigin(origins={"http://localhost:4200", "http://localhost:9000"}, allowCredentials = "true")
    @PostMapping("account")
    public Account addAccount(@RequestBody Account account) {
        return accountService.addAccount(account);
    }
    @CrossOrigin(origins={"http://localhost:4200", "http://localhost:9000"}, allowCredentials = "true")
    @GetMapping("account")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }
}

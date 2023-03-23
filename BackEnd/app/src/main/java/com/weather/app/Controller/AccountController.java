package com.weather.app.Controller;

import com.weather.app.Model.Account;
import com.weather.app.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins={"http://localhost:4200", "http://localhost:9000"}, allowCredentials = "true")
@RestController
public class AccountController {
    AccountService accountService;
    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
    @PostMapping("account")
    public Account addAccount(@RequestBody Account account) {
        return accountService.addAccount(account);
    }
    @GetMapping("account")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }
}

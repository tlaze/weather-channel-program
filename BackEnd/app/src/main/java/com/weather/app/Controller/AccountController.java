package com.weather.app.Controller;

import com.weather.app.Model.Account;
import com.weather.app.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
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
    @PatchMapping("account/{id}")
    public Account loginUser(@RequestBody Account account, @PathVariable long id){
        return accountService.changeLoginStatus(id, account);
    }
}

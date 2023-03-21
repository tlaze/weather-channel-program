package com.weather.app.Service;

import com.weather.app.Model.Account;
import com.weather.app.Repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    AccountRepository accountRepository;
    @Autowired
    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
    public Account addAccount(Account account) {
        return accountRepository.save(account);
    }
}

package com.weather.app.Model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@EqualsAndHashCode
public class CompositeKey implements Serializable {
    private long zip;
    private long accountId;
    public CompositeKey(int zip, int accountId) {
        this.zip = zip;
        this.accountId = accountId;
    }
}

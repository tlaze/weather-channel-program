package com.weather.app.Model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@IdClass(CompositeKey.class)
public class Favorites implements Serializable {
    @Id
    private long zip;
    @Id
    public long accountId;
}

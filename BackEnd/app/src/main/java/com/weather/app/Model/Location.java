package com.weather.app.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Location {
    @Id
    private long zip;
    @Column
    private String lat;
    @Column
    private String lng;
    @Column
    private String city;
    @Column
    private String state_id;
    @Column
    private String state_name;
}

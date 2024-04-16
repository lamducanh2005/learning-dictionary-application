package com.application.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "theme")
    private String theme;

    public void setTheme(String theme) {
        if (theme.equals("dark")) {
            this.theme = "dark";
        } else {
            this.theme = "light";
        }
    }

}

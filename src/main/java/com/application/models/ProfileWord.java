package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "profile_word")
public class ProfileWord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "profile_id")
    private Long profileId;

    @Column(name = "word_id")
    private Long wordId;

    @Column(name = "mastery_rate")
    private Long masteryRate;

    @Column(name = "note")
    private String note;
}

package com.application.models;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity @Getter @Setter
@Table(name = "words")
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "word")
    private String word;

    @Column(name = "type")
    private String type;

    @Column(name = "level")
    private String level;

    @Column(name = "explaining")
    private String explain;

    @Column(name = "audio_url")
    private String audioUrl;

    @Column(name = "is_known")
    private boolean isKnown;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "word_id")
    private List<Example> examples;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "word_id")
    private List<Question> questions;
}

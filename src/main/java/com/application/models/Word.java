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

    @Column(name = "explain")
    private String explain;

    @Column(name = "audio_url")
    private String audioUrl;

    @ManyToMany(mappedBy = "words")
    private List<Collection> collections;

    @ElementCollection
    @CollectionTable(name = "examples", joinColumns = @JoinColumn(name = "word_id"))
    @Column(name = "example")
    private List<String> examples;
}

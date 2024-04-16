package com.application.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity @Getter @Setter
@Table(name="collections")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "profile_id")
    private Long profileId;

    @ManyToMany
    @JoinTable(
        name = "word_collection",
        joinColumns = @JoinColumn(name = "collection_id"),
        inverseJoinColumns = @JoinColumn(name = "word_id")
    )
    private List<Word> words;
}

package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "word_comparison")
public class WordComparison {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "word_id")
    private Long wordId;

    @Column(name = "compared_word")
    private String comparedWord;

    @Column(name = "explaining")
    private String explaining;

    @Column(name = "score")
    private Long score;
}

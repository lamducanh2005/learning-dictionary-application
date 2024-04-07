package com.application.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "examples")
public class Example {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "label")
    private String label;

    @Column(name = "vi_example")
    private String viExample;

    @Column(name = "en_example")
    private String enExample;

    @Column(name = "word_id")
    private Long wordId;

    public Example() {

    }

    public Example(String label, String viExample, String enExample) {
        this.label = label;
        this.viExample = viExample;
        this.enExample = enExample;
    }
}

package com.application.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

/**
 * Lớp mô tả dữ liệu từ vựng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh từ vựng
 * - word: tên của từ vựng
 * - type: loại từ vựng
 * - level: cấp độ của từ vựng trên thang CEFR
 * - explain: giải thích nghĩa của từ vựng
 * - audioUrl: đường dẫn đến file âm thanh phát âm từ vựng
 * - examples: danh sách các ví dụ sử dụng từ vựng
 * - questions: danh sách các câu hỏi ôn tập của từ vựng
 */

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

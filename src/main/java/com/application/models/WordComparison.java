package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Lớp mô tả dữ liệu So sánh từ vựng trong ứng dụng Lambda.
 * <p>
 * Thuộc tính:
 * - id: mã định danh so sánh từ vựng
 * - wordId: mã định danh từ vựng gốc của so sánh này
 * - comparedWord: từ vựng được so sánh
 * - explaining: phần so sánh và giải thích giữa hai từ
 * - score: điểm so sánh sự tương đồng giữa hai từ
 */

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

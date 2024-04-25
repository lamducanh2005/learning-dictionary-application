package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Lớp mô tả dữ liệu Câu trả lời cho câu hỏi ôn tập từ vựng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh câu trả lời
 * - questionId: mã định danh câu hỏi mà câu trả lời này thuộc về
 * - answer: nội dung câu trả lời
 * - masteryIncrease: số lượng điểm thành thạo thay đổi khi trả lời đúng câu hỏi
 */
@Entity
@Setter
@Getter
@Table(name = "word_answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "question_id")
    private Long questionId;

    @Column(name = "answer")
    private String answer;

    @Column(name = "mastery_increase")
    private Long masteryIncrease;
}

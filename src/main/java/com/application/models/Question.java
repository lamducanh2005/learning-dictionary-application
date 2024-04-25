package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Lớp mô tả dữ liệu Câu hỏi ôn tập từ vựng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh câu hỏi
 * - wordId: mã định danh từ vựng mà câu hỏi này liên quan đến
 * - question: nội dung câu hỏi
 * - masteryMax: kết quả thành thạo tối đa có thể đạt được khi trả lời đúng câu hỏi
 * - answers: danh sách các câu trả lời cho câu hỏi
 */

@Entity
@Setter
@Getter
@Table(name = "word_question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "word_id")
    private Long wordId;

    @Column(name = "question")
    private String question;

    @Column(name = "mastery_max")
    private Long masteryMax;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "question_id")
    private List<Answer> answers;


}

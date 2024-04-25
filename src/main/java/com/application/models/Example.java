package com.application.models;

import jakarta.persistence.*;
import lombok.*;

/**
 * Lớp mô tả dữ liệu Ví dụ từ vựng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh ví dụ
 * - label: nhãn của ví dụ
 * - viExample: phần tiếng Việt của ví dụ
 * - enExample: phần tiếng Anh của ví dụ
 * - wordId: mã định danh từ vựng mà ví dụ này liên quan đến
 */

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

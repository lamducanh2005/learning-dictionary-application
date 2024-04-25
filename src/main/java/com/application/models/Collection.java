package com.application.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;


/**
 * Lớp mô tả dữ liệu Bộ sưu tập từ vựng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh bộ sưu tập
 * - name: tên của bộ sưu tập
 * - description: mô tả về bộ sưu tập
 * - profileId: mã định danh của hồ sơ sở hữu bộ sưu tập này
 * - words: danh sách các từ vựng nằm trong bộ sưu tập
 */

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

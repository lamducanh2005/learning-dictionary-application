package com.application.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

/**
 * Lớp mô tả dữ liệu Hồ sơ người dùng trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh hồ sơ người dùng
 * - name: tên của hồ sơ người dùng
 */

@Entity
@Getter
@Setter
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

}

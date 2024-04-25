package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.aot.generate.Generated;

/**
 * Lớp mô tả dữ liệu Yêu cầu gửi đến trợ lý ảo trong ứng dụng Lambda.
 *
 * @author lamducanh2005
 * <p>
 * Thuộc tính:
 * - id: mã định danh yêu cầu
 * - profileId: mã định danh hồ sơ người dùng gửi yêu cầu
 * - request: nội dung yêu cầu
 * - response: nội dung phản hồi từ trợ lý
 * - type: loại yêu cầu
 */

@Entity
@Getter
@Setter
@Table(name = "assistant_requests")
public class AssistantRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "profile_id")
    private Long profileId;

    @Column(name = "request")
    private String request;

    @Column(name = "response")
    private String response;

    @Column(name = "type")
    private String type;
}

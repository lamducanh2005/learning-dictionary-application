package com.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.aot.generate.Generated;

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

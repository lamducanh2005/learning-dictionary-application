package com.application.repositories;

import com.application.models.AssistantRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssistantRequestRepository extends JpaRepository<AssistantRequest, Long> {

}

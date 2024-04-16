package com.application.services;

import com.application.models.AssistantRequest;
import com.application.repositories.AssistantRequestRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
@Service
public class AssistantRequestService {

    @Autowired
    private AssistantRequestRepository assistantRequestRepository;

    public void addRequest(AssistantRequest request) {
        assistantRequestRepository.save(request);
    }
}

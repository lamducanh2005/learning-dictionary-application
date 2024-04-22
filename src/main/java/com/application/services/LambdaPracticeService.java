package com.application.services;

import com.application.repositories.QuestionRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
@Service
public class LambdaPracticeService {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private CollectionService collectionService;


}

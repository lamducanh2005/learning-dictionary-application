package com.application.services;

import com.application.models.Answer;
import com.application.models.Question;
import com.application.repositories.QuestionRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public void addQuestion(Question question) {
        questionRepository.save(question);
    }

    public void setQuestion(Question question) {
        questionRepository.save(question);
    }

    public void addAnswerToQuestion(Long questionId, Answer answer) {
        Question question = questionRepository.findQuestionById(questionId);
        question.getAnswers().add(answer);
        questionRepository.save(question);
    }

    public void addAnswerToQuestion(Question question, Answer answer) {
        question.getAnswers().add(answer);
        questionRepository.save(question);
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findQuestionById(id);
    }



}

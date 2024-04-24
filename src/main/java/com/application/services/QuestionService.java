package com.application.services;

import com.application.models.Answer;
import com.application.models.Question;
import com.application.repositories.AnswerRepository;
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

    @Autowired
    private AnswerRepository answerRepository;

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

    public void addAnswer(Answer answer) {
        addAnswerToQuestion(answer.getQuestionId(), answer);
    }

    public void setAnswer(Answer answer) {
        answerRepository.save(answer);
    }

    public void addAnswerToQuestion(Question question, Answer answer) {
        question.getAnswers().add(answer);
        questionRepository.save(question);
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findQuestionById(id);
    }


    public List<Question> getQuestionByWordId(Long wordId) {
        return questionRepository.findQuestionByWordId(wordId);
    }

    public void setQuestionById(Long id, String question) {
        questionRepository.updateQuestionById(id, question);
    }

    public void setMasteryMaxById(Long id, Long masteryMax) {
        questionRepository.updateMasteryMaxById(id, masteryMax);
    }
}

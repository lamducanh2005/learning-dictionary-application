package com.application.repositories;

import com.application.models.Question;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("SELECT q FROM Question q WHERE q.id = ?1")
    Question findQuestionById(Long id);

    @Query("SELECT q FROM Question q WHERE q.wordId = ?1")
    List<Question> findQuestionByWordId(Long wordId);

    @Modifying
    @Transactional
    @Query("UPDATE Question q SET q.question = ?2 WHERE q.id = ?1")
    void updateQuestionById(Long id, String question);

    @Modifying
    @Transactional
    @Query("UPDATE Question q SET q.masteryMax = ?2 WHERE q.id = ?1")
    void updateMasteryMaxById(Long id, Long masteryMax);
}

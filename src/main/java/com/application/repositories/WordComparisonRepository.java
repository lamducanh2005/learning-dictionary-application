package com.application.repositories;

import com.application.models.WordComparison;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordComparisonRepository extends JpaRepository<WordComparison, Long> {


    @Query("SELECT c FROM WordComparison c WHERE c.score >= ?1")
    List<WordComparison> findWordComparisonsMoreThan(Long score);

    @Query("SELECT c FROM WordComparison c WHERE c.score <= ?1")
    List<WordComparison> findWordComparisonsLessThan(Long score);

    @Query("SELECT c FROM WordComparison c WHERE c.score BETWEEN ?1 AND ?2")
    List<WordComparison> findWordComparisonsBetween(Long minScore, Long maxScore);

    @Query("SELECT c FROM WordComparison c WHERE c.wordId = ?1")
    List<WordComparison> findWordComparisonByWordId(Long wordId);

    @Modifying
    @Transactional
    @Query("UPDATE WordComparison c SET c.comparedWord = ?2 WHERE c.id = ?1")
    void updateComparedWordById(Long wordComparisonId, String comparedWord);

    @Modifying
    @Transactional
    @Query("UPDATE WordComparison c SET c.score = ?2 WHERE c.id = ?1")
    void updateScoreById(Long wordComparisonId, Long score);

    @Modifying
    @Transactional
    @Query("UPDATE WordComparison c SET c.explaining = ?2 WHERE c.id = ?1")
    void updateExplainingById(Long wordComparisonId, String explaining);
}

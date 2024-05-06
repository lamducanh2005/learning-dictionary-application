package com.application.repositories;

import org.springframework.data.domain.Sort;
import com.application.models.WordComparison;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordComparisonRepository extends JpaRepository<WordComparison, Long> {


    @Query("SELECT c FROM WordComparison c WHERE c.wordId = ?1 and c.score >= ?2")
    List<WordComparison> findWordComparisonsMoreThan(Long wordId, Long score, Sort sort);

    @Query("SELECT c FROM WordComparison c WHERE c.wordId = ?1 and c.score <= ?2")
    List<WordComparison> findWordComparisonsLessThan(Long wordId, Long score, Sort sort);

    @Query("SELECT c FROM WordComparison c WHERE c.wordId = ?1 and c.score BETWEEN ?2 AND ?3")
    List<WordComparison> findWordComparisonsBetween(Long wordId, Long minScore, Long maxScore);

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

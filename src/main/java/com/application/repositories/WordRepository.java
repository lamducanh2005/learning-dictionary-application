package com.application.repositories;

import com.application.models.Word;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {

    Word findWordById(Long wordId);

    List<Word> findWordsByWord(String word);

    @Query("SELECT w FROM Word w WHERE w.word LIKE :prefix%")
    List<Word> findWordsByPrefix(@Param("prefix") String prefix);

    @Query("SELECT w.word FROM Word w WHERE w.word LIKE :prefix%")
    Set<String> findWordNameByPrefix(@Param("prefix") String prefix);

    @Modifying
    @Transactional
    @Query("UPDATE Word w SET w.isKnown = :isKnown WHERE w.id = :wordId")
    void updateIsKnownById(@Param("wordId") Long wordId, @Param("isKnown") boolean isKnown);
}

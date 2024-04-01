package com.application.repositories;

import com.application.models.Word;
import org.springframework.data.jpa.repository.JpaRepository;
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

}

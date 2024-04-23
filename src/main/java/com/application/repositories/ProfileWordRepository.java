package com.application.repositories;

import com.application.models.ProfileWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileWordRepository extends JpaRepository<ProfileWord, Long> {

    @Query("SELECT pw.masteryRate FROM ProfileWord pw WHERE pw.profileId = ?1 AND pw.wordId = ?2")
    Long findMasteryRateByProfileIdAndWordId(Long profileId, Long wordId);

    @Query("SELECT pw FROM ProfileWord pw WHERE pw.profileId = ?1 AND pw.wordId = ?2")
    ProfileWord findProfileWordByProfileIdAndWordId(Long profileId, Long wordId);

}

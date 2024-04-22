package com.application.repositories;

import com.application.models.ProfileQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileQuestionRepository extends JpaRepository<ProfileQuestion, Long> {

    List<ProfileQuestion> findByProfileIdOrderByNumberAsc(Long profileId);

    @Query("SELECT pq.number FROM ProfileQuestion pq WHERE pq.profileId = ?1 AND pq.questionId = ?2")
    Long findNumberByProfileIdAndQuestionId(Long profileId, Long questionId);
}

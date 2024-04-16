package com.application.repositories;

import com.application.models.Collection;
import com.application.models.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {

    @Query("SELECT c FROM Collection c WHERE c.id = :collectionId")
    Collection findCollectionById(@Param("collectionId") Long collectionId);

    @Query("SELECT c FROM Collection c WHERE c.profileId = :profileId")
    List<Collection> findAllCollectionsByProfileId(@Param("profileId") Long profileId);

    @Query("SELECT c.words FROM Collection c WHERE c.id = :collectionId")
    List<Word> findAllWordsByCollectionId(@Param("collectionId") Long collectionId);

}
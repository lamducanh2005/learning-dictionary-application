package com.application.repositories;

import com.application.models.Collection;
import com.application.models.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {
    Collection getCollectionById(Long collectionId);



}
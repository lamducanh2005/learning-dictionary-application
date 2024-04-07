package com.application.repositories;

import com.application.models.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExampleRepository extends JpaRepository<Example, Long> {

    @Query("SELECT e FROM Example e WHERE e.wordId = ?1")
    List<Example> findExamplesByWordId(Long wordId);
}

package com.application.repositories;

import com.application.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {

    @Query("SELECT p FROM Profile p WHERE p.id = ?1")
    Profile findProfileById(Long id);

    @Query("SELECT p FROM Profile p")
    List<Profile> findAllProfiles();

}

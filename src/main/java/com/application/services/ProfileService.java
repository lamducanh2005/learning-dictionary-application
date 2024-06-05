package com.application.services;

import com.application.models.Profile;
import com.application.repositories.ProfileRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfileById(Long profileId) {
        return profileRepository.findProfileById(profileId);
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAllProfiles();
    }

    public void addProfile(Profile profile) {
        profileRepository.save(profile);
    }

    public void deleteProfileById(Long profileId) {

        Profile f = profileRepository.findProfileById(profileId);
        f.setVisible(false);
        profileRepository.save(f);
    }

}

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

    public void setThemeById(Long profileId, String theme) {
        Profile profile = profileRepository.findProfileById(profileId);
        profile.setTheme(theme);
        profileRepository.save(profile);
    }
}

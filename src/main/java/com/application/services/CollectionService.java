package com.application.services;

import com.application.models.Collection;
import com.application.models.Word;
import com.application.repositories.CollectionRepository;
import com.application.repositories.WordRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class CollectionService {

    @Autowired
    private CollectionRepository collectionRepository;

    @Autowired
    private WordRepository wordRepository;

    public void addWordToCollection(Long wordId, Long collectionId) {
        Word word = wordRepository.findWordById(wordId);
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().add(word);
            collectionRepository.save(collection);
        }
    }

    public void removeWordFromCollection(Long wordId, Long collectionId) {
        Word word = wordRepository.findWordById(wordId);
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().remove(word);
            collectionRepository.save(collection);
        }
    }

    public List<Collection> getAllCollectionsByProfileId(Long profileId) {
        return collectionRepository.findAllCollectionsByProfileId(profileId);
    }

    public Collection getCollectionById(Long collectionId) {
        return collectionRepository.findCollectionById(collectionId);
    }

    public List<Word> getAllWordsByCollectionId(Long collectionId) {
        return collectionRepository.findAllWordsByCollectionId(collectionId);
    }

    public boolean checkWordInCollection(Long wordId, Long collectionId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (collection == null) return false;
        return collection.getWords().stream().anyMatch(word -> word.getId().equals(wordId));
    }

    public void addCollection(Collection collection) {
        collectionRepository.save(collection);
    }
}

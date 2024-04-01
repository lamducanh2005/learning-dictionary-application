package com.application.services;

import com.application.models.Collection;
import com.application.models.Word;
import com.application.repositories.CollectionRepository;
import com.application.repositories.WordRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        Collection collection = collectionRepository.getCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().add(word);
            collectionRepository.save(collection);
        }
    }

    public void removeWordFromCollection(Long wordId, Long collectionId) {
        Word word = wordRepository.findWordById(wordId);
        Collection collection = collectionRepository.getCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().remove(word);
            collectionRepository.save(collection);
        }
    }
}

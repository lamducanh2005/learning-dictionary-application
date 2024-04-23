package com.application.services;

import com.application.models.Collection;
import com.application.models.ProfileQuestion;
import com.application.models.Question;
import com.application.models.Word;
import com.application.repositories.*;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class CollectionService {

    @Autowired
    private CollectionRepository collectionRepository;

    @Autowired
    private WordRepository wordRepository;

    @Autowired
    private ProfileWordRepository profileWordRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ProfileQuestionRepository profileQuestionRepository;

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

    public List<Long> getLevelProportionOfCollection(Long collectionId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        List<Long> levelProportion = new ArrayList<>(Collections.nCopies(6, 0L));

        for (Word word : collection.getWords()) {
            String level = word.getLevel();
            switch (level) {
                case "A1" -> levelProportion.set(0, levelProportion.get(0) + 1);
                case "A2" -> levelProportion.set(1, levelProportion.get(1) + 1);
                case "B1" -> levelProportion.set(2, levelProportion.get(2) + 1);
                case "B2" -> levelProportion.set(3, levelProportion.get(3) + 1);
                case "C1" -> levelProportion.set(4, levelProportion.get(4) + 1);
                case "C2" -> levelProportion.set(5, levelProportion.get(5) + 1);
            }
        }

        return levelProportion;
    }

    public String getLevelOfCollection(Long collectionId) {
        List<Long> lp = getLevelProportionOfCollection(collectionId);
        if (lp.get(5) > 0) return "C2";
        if (lp.get(4) > 0) return "C1";
        if (lp.get(3) > 0) return "B2";
        if (lp.get(2) > 0) return "B1";
        if (lp.get(1) > 0) return "A2";
        if (lp.get(0) > 0) return "A1";
        return "0";
    }

    public Long getMasteryOfCollection(Long collectionId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        Long totalMastery = 0L;

        if (collection == null) return 0L;
        if (collection.getWords().isEmpty()) return 0L;

        for (Word word : collection.getWords()) {
            Long masteryRate = profileWordRepository.findMasteryRateByProfileIdAndWordId(collection.getProfileId(), word.getId());
            if (masteryRate != null) totalMastery += masteryRate;
        }

        return totalMastery / collection.getWords().size();
    }

    public List<Question> getQuestionsForCollection(Long collectionId) {
        List<Question> questions = new ArrayList<>();
        Collection collection = collectionRepository.findCollectionById(collectionId);

        for (Word word : collection.getWords()) {
            List<Question> wordQuestions = questionRepository.findQuestionByWordId(word.getId());
            questions.addAll(wordQuestions);
        }
        java.util.Collections.shuffle(questions);
        return questions;
    }

}

package com.application.services;

import com.application.models.Example;
import com.application.models.Word;
import com.application.repositories.WordRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import dev.hilla.crud.CrudRepositoryService;
import jakarta.transaction.Transactional;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@BrowserCallable
@AnonymousAllowed
@Service
public class WordService {

    @Autowired
    private WordRepository wordRepository;

    public Word getWordById(Long wordId) {
        return wordRepository.findWordById(wordId);
    }

    public List<Word> getWordsByWord(String word) {
        return wordRepository.findWordsByWord(word);
    }

    public List<Word> getWordsByPrefix(String prefix) {
        return wordRepository.findWordsByPrefix(prefix);
    }

    public List<String> getSuggestionsByPrefix(String prefix) {
        Set<String> wordSet = wordRepository.findWordNameByPrefix(prefix);
        return new ArrayList<>(wordSet);
    }

    public void setIsKnownById(Long wordId, boolean isKnown) {
        wordRepository.updateIsKnownById(wordId, isKnown);
    }

    public void setTypeById(Long id, String type) {
        wordRepository.updateTypeById(id, type);
    }

    public void setLevelById(Long id, String level) {
        wordRepository.updateLevelById(id, level);
    }

    public void setExplainById(Long id, String explain) {
        wordRepository.updateExplainById(id, explain);
    }

    public void setExamplesById(Long id, List<Example> examples) {
        Word word = wordRepository.findWordById(id);
        word.setExamples(examples);
        wordRepository.save(word);
    }


}



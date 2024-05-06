package com.application.services;

import com.application.models.WordComparison;
import com.application.repositories.WordComparisonRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class WordComparisonService {

    @Autowired
    private WordComparisonRepository wordComparisonRepository;

    public List<WordComparison> getSynonymsByWordId(Long wordId) {
        return wordComparisonRepository.findWordComparisonsMoreThan(wordId, 75L, Sort.by(Sort.Direction.DESC, "score"));
    }

    public List<WordComparison> getAntonymsByWordId(Long wordId) {
        return wordComparisonRepository.findWordComparisonsLessThan(wordId, -75L, Sort.by(Sort.Direction.DESC, "score"));
    }

    private List<WordComparison> getRelatedByWordId(Long wordId) {
        return wordComparisonRepository.findWordComparisonsBetween(wordId, -74L, 74L);
    }

    public List<WordComparison> getComparisonsByWordId(Long wordId) {
        List<WordComparison> result = new ArrayList<>();
        result.addAll(getSynonymsByWordId(wordId));
        result.addAll(getAntonymsByWordId(wordId));
        result.addAll(getRelatedByWordId(wordId));
        return result;
    }

    public void addComparison(WordComparison wordComparison) {
        wordComparisonRepository.save(wordComparison);
    }

    public void setComparison(WordComparison wordComparison) {
        wordComparisonRepository.save(wordComparison);
    }

    public void setComparedWordById(Long wordComparisonId, String comparedWord) {
        wordComparisonRepository.updateComparedWordById(wordComparisonId, comparedWord);
    }

    public void setScoreById(Long wordComparisonId, Long score) {
        wordComparisonRepository.updateScoreById(wordComparisonId, score);
    }

    public void setExplainingById(Long wordComparisonId, String explaining) {
        wordComparisonRepository.updateExplainingById(wordComparisonId, explaining);
    }
}

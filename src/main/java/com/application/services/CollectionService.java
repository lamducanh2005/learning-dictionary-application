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
import java.util.Comparator;
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


    /**
     * Thêm từ mới và một bộ sưu tập đã có
     *
     * @param wordId       là mã định danh của từ
     * @param collectionId là mã định danh của bộ sưu tập
     */
    public void addWordToCollection(Long wordId, Long collectionId) {
        Word word = wordRepository.findWordById(wordId);
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().add(word);
            collectionRepository.save(collection);
        }
    }

    /**
     * Xóa từ khỏi bộ sưu tập
     * @param wordId là mã định danh của từ
     * @param collectionId là mã định danh của bộ sưu tập
     */
    public void removeWordFromCollection(Long wordId, Long collectionId) {
        Word word = wordRepository.findWordById(wordId);
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (word != null && collection != null) {
            collection.getWords().remove(word);
            collectionRepository.save(collection);
        }
    }

    /**
     * Lấy tất cả bộ sưu tập của một hồ sơ người dùng
     * @param profileId là mã định danh của hồ sơ người dùng
     * @return danh sách các bộ sưu tập theo yêu cầu
     */
    public List<Collection> getAllCollectionsByProfileId(Long profileId) {
        return collectionRepository.findAllCollectionsByProfileId(profileId);
    }

    /**
     * Lấy bộ sưu tập theo id của nó
     * @param collectionId là mã định danh của bộ sưu tập
     * @return bộ sưu tập theo yêu cầu
     */
    public Collection getCollectionById(Long collectionId) {
        return collectionRepository.findCollectionById(collectionId);
    }

    public List<Word> getAllWordsByCollectionId(Long collectionId) {
        List<Word> words = collectionRepository.findAllWordsByCollectionId(collectionId);
        words.sort(Comparator.comparing(Word::getWord));
        return words;
    }

    /**
     * Kiểm tra từ có trong bộ sưu tập không
     * @param wordId là mã định danh của từ cần kiểm tra
     * @param collectionId là mã định danh của bộ sưu tập cần đối chiếu
     * @return true nếu từ có trong bộ sưu tập, ngược lại trả về false
     */
    public boolean checkWordInCollection(Long wordId, Long collectionId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        if (collection == null) return false;
        return collection.getWords().stream().anyMatch(word -> word.getId().equals(wordId));
    }

    /**
     * Thêm một bộ sưu tập mới
     * @param collection là bộ sưu tập cần thêm
     */
    public void addCollection(Collection collection) {
        collectionRepository.save(collection);
    }

    /**
     * Lấy cơ cấu cấp độ từ vựng trong một bộ sưu tập
     * @param collectionId là mã định danh của bộ sưu tập cần lấy
     * @return danh sách gồm 6 phần tử tương ứng với số lượng từ từng cấp độ
     */
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

    /**
     * Lấy cấp độ của bộ sưu tập, dựa theo từ vựng có cấp độ cao nhất trong bộ sưu tập.
     * @param collectionId là mã định danh của bộ sưu tập cần lấy
     * @return cấp độ của bộ sưu tập
     */
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

    /**
     * Tính toán và lấy mức độ thành thạo của một bộ sưu tập
     * @param collectionId là mã định danh của bộ sưu tập cần lấy
     * @return số nguyên là mức độ thành thạo của bộ sưu tập trên thang 100
     */
    public Long getMasteryOfCollection(Long collectionId, Long profileId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        Long totalMastery = 0L;

        if (collection == null) return 0L;
        if (collection.getWords().isEmpty()) return 0L;

        for (Word word : collection.getWords()) {
            Long masteryRate = profileWordRepository.findMasteryRateByProfileIdAndWordId(profileId, word.getId());
            if (masteryRate != null) totalMastery += masteryRate;
        }

        return totalMastery / collection.getWords().size();
    }

    /**
     * Tính toán và lấy mức độ thành thạo chính xác 2 chữ số thập phân của một bộ sưu tập
     * @param collectionId là mã định danh của bộ sưu tập cần lấy
     * @return số thực là mức độ thành thạo của bộ sưu tập trên thang 100
     */
    public Double getExactMasteryOfCollection(Long collectionId, Long profileId) {
        Collection collection = collectionRepository.findCollectionById(collectionId);
        Double totalMastery = 0.0;

        if (collection == null) return 0.0;
        if (collection.getWords().isEmpty()) return 0.0;

        for (Word word : collection.getWords()) {
            Long masteryRate = profileWordRepository.findMasteryRateByProfileIdAndWordId(profileId, word.getId());
            if (masteryRate != null) totalMastery += masteryRate;
        }

        return totalMastery / collection.getWords().size();
    }

    /**
     * Lấy danh sách câu hỏi cho một bộ sưu tập
     * @param collectionId là mã định danh của bộ sưu tập cần lấy
     * @return danh sách câu hỏi cho bộ sưu tập
     */
    public List<Question> getQuestionsForCollection(Long collectionId) {
        List<Question> questions = new ArrayList<>();
        Collection collection = collectionRepository.findCollectionById(collectionId);

        for (Word word : collection.getWords()) {
            List<Question> wordQuestions = questionRepository.findQuestionByWordId(word.getId());
            for (Question question : wordQuestions) {
                Collections.shuffle(question.getAnswers());
            }

            questions.addAll(wordQuestions);
        }
        java.util.Collections.shuffle(questions);
        return questions;
    }


    public void saveCollection(Collection collection) {
        collectionRepository.save(collection);
    }

    public void deleteCollection(Collection collection) {
        collectionRepository.delete(collection);
    }

    public void deleteCollectionById(Long collectionId) {
        collectionRepository.deleteById(collectionId);
    }

}

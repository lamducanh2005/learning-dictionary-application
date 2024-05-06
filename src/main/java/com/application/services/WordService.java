package com.application.services;

import com.application.models.Example;
import com.application.models.ProfileWord;
import com.application.models.Word;
import com.application.repositories.ProfileWordRepository;
import com.application.repositories.WordRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private ProfileWordRepository profileWordRepository;

    /**
     * Lấy từ theo id của nó
     *
     * @param wordId là id của từ
     * @return trả về Word theo yêu cầu
     */
    public Word getWordById(Long wordId) {
        return wordRepository.findWordById(wordId);
    }

    /**
     * Lấy tất cả các từ có tên theo yêu cầu
     *
     * @param word là tên của từ
     * @return danh sách các từ có tên theo yêu cầu
     */
    public List<Word> getWordsByWord(String word) {
        return wordRepository.findWordsByWord(word);
    }

    /**
     * Lấy danh sách các từ có tên theo tiền tố nào đó
     * @param prefix là tiền tố của từ
     * @return danh sách các từ có tên theo yêu cầu
     */
    public List<Word> getWordsByPrefix(String prefix) {
        return wordRepository.findWordsByPrefix(prefix);
    }

    /**
     * Lấy danh sách gợi ý từ theo tiền tố phục vụ cho thanh tìm kiếm
     * @param prefix là tiền tố của từ
     * @return danh sách gợi ý từ theo yêu cầu
     */
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


    public void increaseMasteryRate(Long wordId, Long profileId, Long masteryRateIncrease) {
        ProfileWord pw = profileWordRepository.findProfileWordByProfileIdAndWordId(profileId, wordId);
        if (pw == null) {
            pw = new ProfileWord();
            pw.setProfileId(profileId);
            pw.setWordId(wordId);
            pw.setMasteryRate(0L);
        }

        pw.setMasteryRate(pw.getMasteryRate() + masteryRateIncrease);
        if (pw.getMasteryRate() < 0) pw.setMasteryRate(0L);
        else if (pw.getMasteryRate() > 100) pw.setMasteryRate(100L);
        profileWordRepository.save(pw);
    }

    /**
     * Hàm thực hiện việc tăng giảm độ thành thạo của từ vựng trong hồ sơ.
     *
     * @param wordId              là id của từ vựng
     * @param profileId           là id của hồ sơ
     * @param masteryRateIncrease là số nguyên đại số, dương là tăng, âm là giảm
     * @param masteryMax          là trình độ của câu hỏi
     * @return trả về hiệu số giữa trình độ trước và sau khi tăng giảm
     */
    public Long increaseMasteryRateWithMasteryMax(Long wordId, Long profileId, Long masteryRateIncrease, Long masteryMax) {
        ProfileWord pw = profileWordRepository.findProfileWordByProfileIdAndWordId(profileId, wordId);
        if (pw == null) {
            pw = new ProfileWord();
            pw.setProfileId(profileId);
            pw.setWordId(wordId);
            pw.setMasteryRate(0L);
        }

        Long beforeMasteryRate = pw.getMasteryRate();

        if (masteryRateIncrease > 0) {
            /*
             * NGUYÊN TẮC CỘNG
             * Nếu trình độ hiện tại vượt qua trình độ câu hỏi, thì giữ nguyên điểm thành thạo
             * Nếu trình độ hiện tại cộng thêm mà vượt quá trình độ câu hỏi, thì chỉ lấy phần tối đa có thể
             * Nếu trình độ hiện tại cộng thêm mà không vượt quá trình độ câu hỏi, thì cộng bình thường
             */

            if (beforeMasteryRate >= masteryMax) ;
            else if (beforeMasteryRate + masteryRateIncrease >= masteryMax)
                pw.setMasteryRate(masteryMax);
            else
                pw.setMasteryRate(beforeMasteryRate + masteryRateIncrease);
        } else if (masteryRateIncrease < 0) {
            /*
             * NGUYÊN TẮC TRỪ
             * Nếu trình độ hiện tại hơn trình độ câu hỏi, thì trừ gấp đôi điểm
             * Nếu trình độ hiện tại phù hợp với câu hỏi, thì trừ bình thường và không kéo trình độ xuống
             * Nếu trình độ hiện tại thấp hơn trình độ câu hỏi, thì không trừ
             * Nếu trình độ xuống đến con số âm, thì đặt lại bằng 0
             */
            if (beforeMasteryRate >= masteryMax)
                pw.setMasteryRate(beforeMasteryRate + masteryRateIncrease * 2);
            else if (beforeMasteryRate + masteryRateIncrease >= masteryMax - 25)
                pw.setMasteryRate(Math.max(beforeMasteryRate + masteryRateIncrease, masteryMax - 25));

            if (pw.getMasteryRate() < 0) pw.setMasteryRate(0L);
        }

        Long afterMasteryRate = pw.getMasteryRate();
        profileWordRepository.save(pw);
        return afterMasteryRate - beforeMasteryRate;
    }

    public Long getMasteryRate(Long wordId, Long profileId) {
        ProfileWord pw = profileWordRepository.findProfileWordByProfileIdAndWordId(profileId, wordId);
        if (pw == null) return 0L;
        return pw.getMasteryRate();
    }

    public void setNoteForWord(Long wordId, Long profileId, String note) {
        ProfileWord pw = profileWordRepository.findProfileWordByProfileIdAndWordId(profileId, wordId);
        if (pw == null) {
            pw = new ProfileWord();
            pw.setProfileId(profileId);
            pw.setWordId(wordId);
            pw.setMasteryRate(0L);
        }
        pw.setNote(note);
        profileWordRepository.save(pw);

    }

    public String getNoteForWord(Long wordId, Long profileId) {
        ProfileWord pw = profileWordRepository.findProfileWordByProfileIdAndWordId(profileId, wordId);
        if (pw == null) return "";
        return pw.getNote();
    }

}



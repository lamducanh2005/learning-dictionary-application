package com.application.services;

import com.application.models.Example;
import com.application.repositories.ExampleRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
@Service
public class ExampleService {

    @Autowired
    private ExampleRepository exampleRepository;

    public void deleteExampleById(Long exampleId) {
        exampleRepository.deleteById(exampleId);
    }

    public void deleteExample(Example example) {
        exampleRepository.deleteById(example.getId());
    }

    public void setExample(Example example) {
        exampleRepository.save(example);
    }

    public void setExamples(List<Example> examples) {
        exampleRepository.saveAll(examples);
    }

    public List<Example> getExamplesByWordId(Long wordId) {
        return exampleRepository.findExamplesByWordId(wordId);
    }
}

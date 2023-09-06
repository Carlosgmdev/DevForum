package com.carlosg.devhotel.service;

import com.carlosg.devhotel.domain.answers.Answer;
import com.carlosg.devhotel.domain.answers.AnswerDto;
import com.carlosg.devhotel.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public List<AnswerDto> getAnswers() {
        List<Answer> answers = answerRepository.findAll();
        return answers.stream()
                .map(AnswerDto::new)
                .collect(Collectors.toList());
    }
}

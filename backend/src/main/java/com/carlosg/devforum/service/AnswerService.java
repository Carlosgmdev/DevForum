package com.carlosg.devforum.service;

import com.carlosg.devforum.domain.answers.Answer;
import com.carlosg.devforum.domain.answers.AnswerDto;
import com.carlosg.devforum.repository.AnswerRepository;
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

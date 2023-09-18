package com.carlosg.devforum.service;

import com.carlosg.devforum.domain.answers.Answer;
import com.carlosg.devforum.domain.answers.AnswerDto;
import com.carlosg.devforum.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
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

    public List<AnswerDto> getUserAnswers(Long id) {
        List<Answer> answers = answerRepository.findByUserId(id);
        return answers.stream()
                .map(AnswerDto::new)
                .collect(Collectors.toList());
    }

    public AnswerDto createAnswer(Answer answer) {
        if(answer.getId() == null) {
            answer.setCreated_at(LocalDateTime.now());
        } else {
            Answer answerFromDb = answerRepository.findById(answer.getId()).orElseThrow();
            answer.setCreated_at(answerFromDb.getCreated_at());
        }
        return new AnswerDto(answerRepository.save(answer));
    }

    public List<AnswerDto> getTopicAnswers(Long id) {
        List<Answer> answers = answerRepository.findByTopicId(id);
        return answers.stream()
                .map(AnswerDto::new)
                .collect(Collectors.toList());
    }

    public void deleteAnswer(Long id) {
        answerRepository.deleteById(id);
    }
}

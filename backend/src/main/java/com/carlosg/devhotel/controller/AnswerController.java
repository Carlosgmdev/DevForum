package com.carlosg.devhotel.controller;

import com.carlosg.devhotel.domain.answers.Answer;
import com.carlosg.devhotel.domain.answers.AnswerDto;
import com.carlosg.devhotel.repository.AnswerRepository;
import com.carlosg.devhotel.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping
    public List<AnswerDto> getAnswers() {
        return answerService.getAnswers();
    }
}

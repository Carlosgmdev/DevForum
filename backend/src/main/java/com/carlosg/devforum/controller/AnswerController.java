package com.carlosg.devforum.controller;

import com.carlosg.devforum.domain.answers.AnswerDto;
import com.carlosg.devforum.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping
    public ResponseEntity<List<AnswerDto>> getAnswers() {
        return ResponseEntity.ok(
                answerService.getAnswers()
        );
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<AnswerDto>> getUserAnswers(@PathVariable Long id) {
        return ResponseEntity.ok(
                answerService.getUserAnswers(id)
        );
    }
}

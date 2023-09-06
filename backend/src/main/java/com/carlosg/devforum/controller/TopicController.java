package com.carlosg.devforum.controller;

import com.carlosg.devforum.domain.topics.Topic;
import com.carlosg.devforum.domain.topics.TopicDto;
import com.carlosg.devforum.service.TopicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping
    public ResponseEntity<List<TopicDto>> getTopics() {
        return ResponseEntity.ok(
                topicService.getTopics()
        );
    }

    @PostMapping
    public ResponseEntity<TopicDto> createTopic(@RequestBody @Valid Topic topic) {
        return ResponseEntity.ok(
                topicService.createTopic(topic)
        );
    }

}

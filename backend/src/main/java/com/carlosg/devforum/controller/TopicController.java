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

    @GetMapping("/course/{id}")
    public ResponseEntity<List<TopicDto>> getCourseTopics(@PathVariable Long id) {
        return ResponseEntity.ok(
                topicService.getCourseTopics(id)
        );
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<TopicDto>> getUserTopics(@PathVariable Long id) {
        return ResponseEntity.ok(
                topicService.getUserTopics(id)
        );
    }


    @PostMapping
    public ResponseEntity<TopicDto> createTopic(@RequestBody @Valid Topic topic) {
        return ResponseEntity.ok(
                topicService.createTopic(topic)
        );
    }


    /*
    @PostMapping
    public ResponseEntity<List<TopicDto>> createTopics(@RequestBody @Valid List<Topic> topics) {
        return ResponseEntity.ok(
                topicService.createTopics(topics)
        );
    }
     */

}

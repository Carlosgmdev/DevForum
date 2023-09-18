package com.carlosg.devforum.controller;

import com.carlosg.devforum.domain.topics.Topic;
import com.carlosg.devforum.domain.topics.TopicDto;
import com.carlosg.devforum.service.TopicService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topics")
@SecurityRequirement(name = "bearer-key")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping
    public ResponseEntity<List<TopicDto>> getTopics() {
        return ResponseEntity.ok(
                topicService.getTopics()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDto> getTopic(@PathVariable Long id) {
        return ResponseEntity.ok(
                topicService.getTopic(id)
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTopic(@PathVariable Long id) {
        topicService.deleteTopic(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<TopicDto> changeStatus(@PathVariable Long id) {
        return ResponseEntity.ok(
                topicService.changeStatus(id)
        );
    }
}

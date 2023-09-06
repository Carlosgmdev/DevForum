package com.carlosg.devforum.service;

import com.carlosg.devforum.domain.topics.Topic;
import com.carlosg.devforum.domain.topics.TopicDto;
import com.carlosg.devforum.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    public List<TopicDto> getTopics() {
        List<Topic> topics = topicRepository.findAll();
        return topics.stream()
                .map(TopicDto::new)
                .collect(Collectors.toList());
    }

    public TopicDto createTopic(Topic topic) {
        if(topic.getId() == null) {
            topic.setSolved(false);
            topic.setCreated_at(LocalDateTime.now());
        } else {
            Topic topicFromDb = topicRepository.findById(topic.getId()).orElseThrow();
            topic.setCreated_at(topicFromDb.getCreated_at());
            topic.setSolved(topicFromDb.getSolved());
        }
        return new TopicDto(topicRepository.save(topic));
    }
}

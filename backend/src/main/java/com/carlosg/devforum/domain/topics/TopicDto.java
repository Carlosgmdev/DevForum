package com.carlosg.devforum.domain.topics;

import com.carlosg.devforum.domain.courses.Course;
import com.carlosg.devforum.domain.users.UserDto;

import java.time.LocalDateTime;

public record TopicDto(
        Long id,
        String name,
        String message,
        Boolean solved,
        LocalDateTime created_at,
        UserDto user,
        Course course
) {
    public TopicDto(Topic topic) {
        this(
                topic.getId(),
                topic.getTitle(),
                topic.getMessage(),
                topic.getSolved(),
                topic.getCreated_at(),
                new UserDto(
                        topic.getUser().getId(),
                        topic.getUser().getUsername()
                ),
                topic.getCourse()
        );
    }
}

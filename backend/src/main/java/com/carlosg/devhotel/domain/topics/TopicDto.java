package com.carlosg.devhotel.domain.topics;

import com.carlosg.devhotel.domain.courses.Course;
import com.carlosg.devhotel.domain.users.UserDto;

import java.time.LocalDateTime;

public record TopicDto(
        Long id,
        String name,
        String message,
        Boolean solved,
        LocalDateTime created_at,
        UserDto author,
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
                        topic.getAuthor().getId(),
                        topic.getAuthor().getUsername()
                ),
                topic.getCourse()
        );
    }
}

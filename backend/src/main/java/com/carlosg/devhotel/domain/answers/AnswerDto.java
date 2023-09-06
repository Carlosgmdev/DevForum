package com.carlosg.devhotel.domain.answers;

import com.carlosg.devhotel.domain.topics.TopicAnswerDto;
import com.carlosg.devhotel.domain.users.UserDto;

import java.time.LocalDateTime;

public record AnswerDto(
        Long id,
        String message,
        LocalDateTime created_at,
        UserDto author,
        TopicAnswerDto topic
) {
    public AnswerDto(Answer answer) {
        this(
                answer.getId(),
                answer.getAnswer(),
                answer.getCreated_at(),
                new UserDto(
                        answer.getAuthor().getId(),
                        answer.getAuthor().getUsername()
                ),
                new TopicAnswerDto(
                        answer.getTopic().getId(),
                        answer.getTopic().getTitle()
                )
        );
    }
}

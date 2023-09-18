package com.carlosg.devforum.domain.answers;

import com.carlosg.devforum.domain.topics.TopicAnswerDto;
import com.carlosg.devforum.domain.users.UserDto;

import java.time.LocalDateTime;

public record AnswerDto(
        Long id,
        String answer,
        LocalDateTime created_at,
        UserDto user,
        TopicAnswerDto topic
) {
    public AnswerDto(Answer answer) {
        this(
                answer.getId(),
                answer.getAnswer(),
                answer.getCreated_at(),
                new UserDto(
                        answer.getUser().getId(),
                        answer.getUser().getUsername()
                ),
                new TopicAnswerDto(
                        answer.getTopic().getId(),
                        answer.getTopic().getTitle()
                )
        );
    }
}

package com.carlosg.devforum.domain.answers;

import com.carlosg.devforum.domain.topics.Topic;
import com.carlosg.devforum.domain.users.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "answers")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Answer is required")
    @Column(length = 2000)
    private String answer;

    private LocalDateTime created_at;

    @ManyToOne
    private User user;

    @ManyToOne
    private Topic topic;

}

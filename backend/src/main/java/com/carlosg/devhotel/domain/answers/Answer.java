package com.carlosg.devhotel.domain.answers;

import com.carlosg.devhotel.domain.topics.Topic;
import com.carlosg.devhotel.domain.users.User;
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
    @NotBlank(message = "Author is required")
    private User author;

    @ManyToOne
    @NotBlank(message = "Topic is required")
    private Topic topic;

}

package com.carlosg.devhotel.repository;

import com.carlosg.devhotel.domain.answers.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long>{
}

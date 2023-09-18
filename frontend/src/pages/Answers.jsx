import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnswerCard from '../components/AnswerCard';
import Title from '../components/Title';

const Answers = ({user}) => {
  const [answers, setAnswers] = useState([]);
  const {id, username, email, token} = user;

  useEffect(() => {  

    fetch(`http://localhost:8080/answers/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setAnswers(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex flex-col gap-4 h-full'>

      <Title>My Answers</Title>


      <div className='grid grid-cols-2 gap-4 overflow-y-scroll pr-2 pb-4'>
      {
        answers.map(answer => (
          <AnswerCard
            key={answer.id}
            answer={answer}
          />
        ))
      }
      </div>

    </div>
  );
}

export default Answers
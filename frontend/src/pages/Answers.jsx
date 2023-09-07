import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopicCard from '../components/TopicCard';

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
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className="text-3xl text-slate-700 mb-6">My Topics</h1>
        <Link 
          className="rounded-lg cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white px-4 py-2">
          New Topic
        </Link>
      </div>
      <div>
      <div className='flex flex-col gap-4'>
      {
        answers.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
          />
        ))
      }
      </div>
      </div>
    </div>
  );
}

export default Answers
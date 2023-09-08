import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TopicCard from '../components/TopicCard';

const Topics = ({user}) => {
  const [topics, setTopics] = useState([]);
  const {id, username, email, token} = user;

  useEffect(() => {  

    fetch(`http://localhost:8080/topics/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setTopics(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex flex-col gap-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl">My Topics</h1>
        <Link 
          className="rounded-lg cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white px-4 py-2">
          New Topic
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 overflow-y-scroll pr-2 pb-4'>
      {
        topics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
          />
        ))
      }
      </div>
    </div>
  );
}

export default Topics
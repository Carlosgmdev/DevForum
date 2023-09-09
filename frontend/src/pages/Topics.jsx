import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";
import Title from "../components/Title";
import { set } from "date-fns";
import TopicModal from "../components/TopicModal";

const Topics = ({ user }) => {
  const [topics, setTopics] = useState([]);
  const { id, username, email, token } = user;
  const [topicModal, setTopicModal] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:8080/topics/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full">
      {topicModal && (<TopicModal/>)}
      <Title>My Topics</Title>
      <div className="flex gap-4 h-full overflow-hidden">
        <div className="w-1/6 flex flex-col gap-4"> 
          <button 
            className="rounded-md cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white px-4 py-2 text-center"
            onClick={() => setTopicModal(true)}
          >
            New Topic
          </button>
          <input 
            type="text "
            className='px-3 py-2 border rounded-3xl text-center outline-none dark:bg-slate-800'
            placeholder="🔎 Search Topics"
   
          />
        </div>
        <div className="grid grid-cols-2 w-5/6 gap-4 overflow-y-scroll pr-2 pb-4">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;

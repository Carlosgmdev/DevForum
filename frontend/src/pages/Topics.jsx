import React from "react";
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";
import Title from "../components/Title";
import TopicModal from "../components/TopicModal";
import Button from "../components/Button";
import Search from "../components/Search";

const Topics = ({ user }) => {
  const [topics, setTopics] = useState([]);
  const { id, username, email, token } = user;
  const [topicModal, setTopicModal] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredTopics, setFilteredTopics] = useState([]);


  useEffect(() => {
    setFilteredTopics(
      topics.filter(topic => {
        return topic.name.toLowerCase().includes(query)
      })
    )
  }, [query, topics]);


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
      {topicModal && (<TopicModal user={user} setTopicModal={setTopicModal} setTopics={setTopics}/>)}
      <Title>My Topics</Title>
      <div className="flex gap-4 h-full overflow-hidden">
        <div className="w-1/6 flex flex-col gap-4"> 
          <Button action={() => setTopicModal(true)}>New Topic</Button>
          <Search placeholder={'Topics'} set={setQuery} />
        </div>
        <div className="grid grid-cols-2 w-5/6 gap-4 overflow-y-scroll pr-2 pb-4">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;

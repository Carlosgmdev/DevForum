import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Topic from '../components/TopicCard';
import Title from '../components/Title';
import Button from '../components/Button';
import TopicModal from '../components/TopicModal';

const Course = ({user}) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [topics, setTopics] = useState([]);
  const {token} = user;
  const [topicModal, setTopicModal] = useState(false);

  useEffect(() => {  
    fetch(`http://localhost:8080/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setCourse(data);
      })
      .catch(error => console.log(error));

    fetch(`http://localhost:8080/topics/course/${courseId}`, {
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
  
  const {name} = course;

  return (
    <div className='flex flex-col gap-4 h-full'>
      {topicModal && (<TopicModal user={user} setTopicModal={setTopicModal} setTopics={setTopics} defCourse={course}/>)}
      <div className='flex justify-between items-center'>
        <Title>{`Topics - ${name}`}</Title>
        <Button action={(e) => setTopicModal(true)} >New Topic</Button>
      </div>

      <div className='flex flex-col  overflow-y-scroll gap-4 pr-2 pb-4'>
      {
        topics.map(topic => (
          <Topic
            key={topic.id}
            topic={topic}
          />
        ))
      }

      </div>
    </div>
  );
};

export default Course;

import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Topic from '../components/TopicCard';

const Course = ({user}) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [topics, setTopics] = useState([]);
  const {id, username, email, token} = user;

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
    <div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className="text-3xl">{`Topics - ${name}`}</h1>
        <Link 
          className="rounded-lg cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white px-4 py-2">
          New Topic
        </Link>
      </div>
      <div>
      <div className='flex flex-col gap-4'>
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
    </div>
  );
};

export default Course;

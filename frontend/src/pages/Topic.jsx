import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";
import { formatDate } from "../js/utilities";
import AnswerModal from "../components/AnswerModal";
import Answer from "../components/Answer";
import TopicModal from "../components/TopicModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Status from "../components/Status";

const Topic = ({ user }) => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState({});
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [answerModal, setAnswerModal] = useState(false);
  const [topicModal, setTopicModal] = useState(false);
  const { token } = user;
  const isPropietary = user.id === topic.user?.id;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/topics/${topicId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopic(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    fetch(`http://localhost:8080/answers/topic/${topicId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswers(data);
      })
      .catch((error) => console.log(error));
  }, [topicId, token]);

  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/topics/${topicId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.status === 204) {
            toast.success("Topic deleted successfully", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/dashboard/topics");
          }
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      {answerModal && (
        <AnswerModal
          user={user}
          setAnswerModal={setAnswerModal}
          setAnswers={setAnswers}
          topicId={topicId}
        />
      )}
      {topicModal && (
        <TopicModal
          user={user}
          setTopicModal={setTopicModal}
          defCourse={topic.course}
          setTopic={setTopic}
          topic={topic}
        />
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="rounded-lg border-2 border-slate-500 p-4 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Title>{`${topic.name} - ${topic.course.name}`}</Title>
            <Status topic={topic} setTopic={setTopic} user={user}/>
          </div>
          <p>{topic.message}</p>
          <div className="flex justify-between items-center">
            <p>{`Created on ${formatDate(topic.created_at)} by ${
              topic.user.username
            }`}</p>
            <div className="flex gap-2">
              <Button action={() => setAnswerModal(true)}>Reply</Button>
              {isPropietary && (
                <div className="flex gap-2">
                  <Button action={() => setTopicModal(true)}>Edit</Button>
                  <Button action={(e) => handleDelete(e)}>Delete</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col overflow-y-scroll overflow-x-hidden gap-4 pr-2 pb-4">
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} user={user} setAnswers={setAnswers}/>
        ))}
      </div>
    </div>
  );
};

export default Topic;

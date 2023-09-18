import React, { useEffect, useState } from "react";
import Title from "./Title";
import Form from "./Form";
import TextArea from "./TextArea";
import Button from "./Button";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AnswerModal = ({ user, setAnswerModal, prevAnswer, setAnswers, topicId }) => {
  const [answer, setAnswer] = useState("");
  const { id, token } = user;
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if(prevAnswer) {
      setAnswer(prevAnswer.answer);
      setIsEdit(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      answer,
      user: { id },
      topic: { id: parseInt(topicId) },
    };
    if(isEdit) {
      newAnswer.id = prevAnswer.id;
      newAnswer.topic.id = prevAnswer.topic.id;
    }
    fetch("http://localhost:8080/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAnswer),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          if(isEdit) {
            setAnswers(prevAnswers => prevAnswers.map(prevAnswer => prevAnswer.id === data.id ? data : prevAnswer));
          } else {
            setAnswers(prevAnswers => [...prevAnswers, data]);
          }
          setAnswerModal(false);
          toast.success(`Answer ${isEdit ? 'edited' : 'created'} successfully!`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          data.map((error) => {
            toast.error(error.error, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 flex flex-col gap-4 dark:bg-slate-800 w-96">
        <Form>
          <Title>{`${isEdit ? 'Edit' : 'New'} Answer`}</Title>
          <TextArea placeholder="Answer" set={setAnswer} value={answer}/>
          <div className="flex justify-between">
            <Button action={(e) => handleSubmit(e)}>{isEdit ? 'Edit' : 'Submit'}</Button>
            <Button action={() => setAnswerModal(false)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AnswerModal;

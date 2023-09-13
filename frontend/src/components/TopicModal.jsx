import React, { useEffect, useState } from "react";
import Title from "./Title";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import {toast } from "react-toastify";


const TopicModal = ({ user, setTopicModal, setTopics }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState(0);
  const { id, token } = user;

  useEffect(() => {
    fetch('http://localhost:8080/courses', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!courseId) {
      toast.error('Please select course', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const newTopic = {
      title,
      message,
      user: { id },
      course: { id: courseId },
    };
    fetch("http://localhost:8080/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newTopic),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.id) {
          setTopics(prevTopics => [...prevTopics, data]);
          setTopicModal(false);
          toast.success("Topic created successfully!", {
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
          data.map(error => {
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
          })
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 flex flex-col gap-4 dark:bg-slate-800 w-96">
        <Form>
          <Title>New Topic</Title>
          <Select data={courses} name={"Course"} setSelectedId={setCourseId} />
          <Input placeholder="Title" set={setTitle} />
          <TextArea placeholder="Message" set={setMessage} />
          <div className="flex justify-between">
            <Button action={(e) => handleSubmit(e)}>Submit</Button>
            <Button action={() => setTopicModal(false)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TopicModal;

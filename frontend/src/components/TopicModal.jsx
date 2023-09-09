import React from "react";
import Title from "./Title";
import Form from "./Form";

const TopicModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <Form>
        
    </Form>
      <div className="bg-white rounded-lg p-6 flex flex-col gap-4">
        <Title>New Topic</Title>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Course</label>
            <select className="border p-2" name="" id="">
                <option value="">Course 1</option>
                <option value="">Course 2</option>
                <option value="">Course 3</option>
                <option value="">Course 4</option>
                <option value="">Course 5</option>
                <option value="">Course 6</option>
                <option value="">Course 7</option>
                <option value="">Course 8</option>
                <option value="">Course 9</option>
                <option value="">Course 10</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Title</label>
            <input
              className="px-3 py-2 border rounded-lg"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Message</label>
            <input
              className="px-3 py-2 border rounded-lg"
              type="text"
              placeholder="Username"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopicModal;

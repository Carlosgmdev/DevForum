import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../js/utilities";
import Status from "./Status";

const TopicCard = ({ topic }) => {
  const { id, name, message, solved, created_at, user, course } = topic;

  return (
    <Link
      className="bg-white shadow-lg  rounded-lg p-4  flex flex-col justify-between gap-4 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
      to={`/dashboard/topics/${id}`}
    >
      <h2 className="text-xl font-bold">{`${name} - ${course.name}`}</h2>
      <p className="line-clamp-1">{message}...</p>
      <div className="flex items-center justify-between">
        <p>{`Created on ${formatDate(topic.created_at)} by ${
          topic.user.username
        }`}</p>
        <Status topic={topic} />
      </div>
    </Link>
  );
};

export default TopicCard;

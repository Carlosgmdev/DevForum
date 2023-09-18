import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

const AnswerCard = ({ answer }) => {
  const { id, answer: message, created_at, user, topic } = answer;
  const formattedDate = format(new Date(created_at), "MMMM d, y", {
    locale: enUS,
  });

  return (
    <Link
      className="bg-white shadow-lg rounded-lg p-4  flex flex-col gap-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
      to={`/dashboard/topics/${topic.id}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{topic.name}</h2>
        <p className="italic">{`Answered on ${formattedDate}`}</p>
      </div>
      <p className="line-clamp-2">{`${message}...`}</p>
      <p>{`Topic - ${topic.name}`}</p>
    </Link>
  );
};

export default AnswerCard;

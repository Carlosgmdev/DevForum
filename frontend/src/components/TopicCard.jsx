import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

const TopicCard = ({ topic }) => {
  const { id, name, message, solved, created_at, user, course } = topic;
  const formattedDate = format(new Date(created_at), "MMMM d, y", {
    locale: enUS,
  });

  return (
    <Link
      className="bg-white shadow-lg  rounded-lg p-4  gap-6 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
      to={`/dashboard/topics/${id}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="italic">{`Created at ${formattedDate}`}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>
            By <span className="font-bold">{user.username}</span>
          </p>
          <p>Course {course.name}</p>
        </div>
        <p className={`text-lg ${solved ? "text-green-400" : "text-red-400"}`}>
          {solved ? "✓ Solved" : "Pending"}
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;

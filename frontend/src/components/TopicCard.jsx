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
      className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-all"
      to={`/dashboard/topics/${id}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-700">{name}</h2>
        <p className="italic">{formattedDate}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p>
            By <span className="font-bold">{user.username}</span>
          </p>
          <p>Course {course.name}</p>
        </div>
        <p className={`text-lg ${solved ? "text-green-500" : "text-red-500"}`}>
          {solved ? "Solved" : "Not Solved"}
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;

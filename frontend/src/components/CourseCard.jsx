import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {

  const { id, name } = course;

  return (
    <Link
      className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
      to={`${id}`}
    >
      <h1 className="text-lg">{name}</h1>
      <p className="text-5xl">{'{ }'}</p>
    </Link>
  );
};

export default CourseCard;

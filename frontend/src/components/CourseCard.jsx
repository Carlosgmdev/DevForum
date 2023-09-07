import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {

  const { id, name } = course;

  return (
    <Link
      key={id}
      className="bg-white shadow-md rounded-lg p-4 h-32 flex items-center hover:scale-105 transition-all gap-6"
      to={`${id}`}
    >
      <img className="w-16" src="/src/assets/code-outline.svg" alt="<> image" />
      <h1 className="text-lg">{name}</h1>
    </Link>
  );
};

export default CourseCard;

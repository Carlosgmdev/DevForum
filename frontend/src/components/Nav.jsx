import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="flex gap-10">
      <Link
        className={`hover:text-slate-700 p-2 rounded-lg ${
          location.pathname === "/dashboard/home"
            ? "text-slate-800 bg-slate-200"
            : ""
        }`}
        to={"home"}
      >
        Home
      </Link>
      <Link
        className={`hover:text-slate-700 p-2 rounded-lg ${
          location.pathname === "/dashboard/courses"
            ? "text-slate-800 bg-slate-200"
            : ""
        }`}
        to={"courses"}
      >
        Courses
      </Link>
      <Link
        className={`hover:text-slate-700 p-2 rounded-lg ${
          location.pathname === "/dashboard/topics"
            ? "text-slate-800 bg-slate-200"
            : ""
        }`}
        to={"topics"}
      >
        My Topics
      </Link>
      <Link
        className={`hover:text-slate-700 p-2 rounded-lg ${
          location.pathname === "/dashboard/answers"
            ? "text-slate-800 bg-slate-200"
            : ""
        }`}
        to={"answers"}
      >
        My Answers
      </Link>
    </div>
  );
};

export default Nav;

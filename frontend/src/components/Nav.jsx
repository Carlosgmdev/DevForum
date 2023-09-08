import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="flex gap-10">
      <Link
        className={`p-2 rounded-lg ${
          location.pathname === "/dashboard/home"
            ? "text-slate-800 bg-slate-300"
            : ""
        }`}
        to={"home"}
      >
        Home
      </Link>
      <Link
        className={`p-2 rounded-lg ${
          location.pathname === "/dashboard/courses"
            ? "text-slate-800 bg-slate-300"
            : ""
        }`}
        to={"courses"}
      >
        Courses
      </Link>
      <Link
        className={`p-2 rounded-lg ${
          location.pathname === "/dashboard/topics"
            ? "text-slate-800 bg-slate-300"
            : ""
        }`}
        to={"topics"}
      >
        My Topics
      </Link>
      <Link
        className={`p-2 rounded-lg ${
          location.pathname === "/dashboard/answers"
            ? "text-slate-800 bg-slate-300"
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

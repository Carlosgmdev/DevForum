import React from "react";
import {useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="flex gap-10">
      <NavItem to="courses">Courses</NavItem>
      <NavItem to="topics">My Topics</NavItem>
      <NavItem to="answers">My Answers</NavItem>
    </div>
  );
};

export default Nav;

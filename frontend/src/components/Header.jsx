import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-lg flex items-center py-4 px-20 justify-between">
      <Link
        className="text-xl font-mono font-bold text-slate-700"
        to={"/dashboard"}
      >
        {`<DevHotel/>`}
      </Link>
      <Nav />
      <Profile />
    </div>
  );
};

export default Header;

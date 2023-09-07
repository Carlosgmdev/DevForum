import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Profile from "./Profile";

const Header = ({username, setUser}) => {
  return (
    <div className=" sticky top-0 w-full bg-white shadow-lg flex items-center py-4 px-20 justify-between">
      <Link
        className="text-xl font-mono font-bold text-slate-700"
        to={"/dashboard"}
      >
        {`<DevForum/>`}
      </Link>
      <Nav />
      <Profile username={username} setUser={setUser}/>
    </div>
  );
};

export default Header;

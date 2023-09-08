import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Profile from "./Profile";

const Header = ({username, setUser}) => {
  return (
    <div className="w-full rounded-xl bg-white shadow-xl flex items-center p-4 justify-between dark:bg-slate-800">
      <Link
        className="text-xl font-mono font-bold"
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

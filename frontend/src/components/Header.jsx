import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import Logo from "./Logo";

const Header = ({username, setUser}) => {
  return (
    <div className="w-full rounded-lg bg-white shadow-xl flex items-center py-4 px-4 justify-between dark:bg-slate-800">
      <Logo/>
      <Nav />
      <Profile username={username} setUser={setUser}/>
    </div>
  );
};

export default Header;
import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = ({user, setUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!user.id) {
      navigate('/login')
    }
  }, [user]);

  const {id, username, email, token} = user;

  return (
    <div className="h-screen w-full bg-slate-200 text-slate-500 overflow-y-scroll">
      <Header username={username} setUser={setUser} />
      <div className="py-10 px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

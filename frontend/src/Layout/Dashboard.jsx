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
    <div className="h-screen w-full  bg-slate-100 text-slate-600  px-14 py-4 flex flex-col gap-4 dark:bg-slate-950 dark:text-slate-200">
      <Header username={username} setUser={setUser} />
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

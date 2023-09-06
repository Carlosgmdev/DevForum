import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-slate-200 text-slate-500">
      <Header />
      <div className="py-10 px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

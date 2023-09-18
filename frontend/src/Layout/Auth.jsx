import React, { Children, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      navigate("/dashboard/topics");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center text-slate-500 dark:bg-slate-950 dark:text-slate-200">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-96 rounded-lg shadow-2xl p-6 flex flex-col gap-10 items-center bg-white dark:bg-slate-800">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;

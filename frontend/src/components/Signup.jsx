import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type="text"
        placeholder="Username"
      />
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type="password"
        placeholder="Password"
      />
      <button className="w-full px-3 py-2 border rounded-lg cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white">
        SignUp
      </button>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;

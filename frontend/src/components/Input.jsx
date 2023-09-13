import React from "react";

const Input = ({ type, placeholder, set }) => {
  return (
    <input
      className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-950 outline-none"
      type={type}
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
};

export default Input;

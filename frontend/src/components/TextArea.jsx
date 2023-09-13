import React from "react";

const TextArea = ({ placeholder, set }) => {
  return (
    <textarea
      className="px-3 py-2 rounded-lg dark:bg-slate-950 h-64 bg-slate-100 outline-none"
      type="text"
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
};

export default TextArea;

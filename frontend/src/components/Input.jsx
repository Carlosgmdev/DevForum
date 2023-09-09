import React from "react";

const Input = ({ placeholder, set }) => {
  return (
    <input
      className="px-3 py-2 border rounded-lg"
      type="text"
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
};

export default Input;

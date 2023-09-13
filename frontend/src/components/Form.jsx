import React from "react";

const Form = ({children}) => {
  return (
    <form className="flex flex-col gap-4 w-full">
      {children}
    </form>
  );
};

export default Form;

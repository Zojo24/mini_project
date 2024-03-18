import React from "react";

const Input = ({ type, ...props }) => {
  return <>{type === "textarea" ? <textarea rows={10} className="textarea"></textarea> : <input type={type} {...props} className="input" />}</>;
};

export default Input;

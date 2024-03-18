import React from "react";
import "../styles/components/box.css";

const Box = ({ className, children, ...props }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;

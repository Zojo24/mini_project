import React from "react";
import "../styles/components/text.css";

const Text = ({ className, type, children, ...props }) => {
  return (
    <div className={`text ${className} ${type && `type${type}`}`} {...props}>
      {children}
    </div>
  );
};

export default Text;

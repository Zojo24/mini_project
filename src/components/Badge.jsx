import React from "react";
import "../styles/components/badge.css";

const Badge = ({ children, color }) => {
  return <div className={`badge ${color}`}>{children}</div>;
};

export default Badge;

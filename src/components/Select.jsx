import React from "react";
import "../styles/components/form.css";

const Select = ({ options, ...props }) => {
  return (
    <>
      <select {...props} className="select">
        {options.map((option, index) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

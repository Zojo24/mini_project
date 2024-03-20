import React from "react";
import "../styles/components/form.css";

const Select = ({ options, onChange, ...props }) => {
  return (
    <>
      <select {...props} className="select" onChange={onChange}>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

import "../styles/components/form.css";

import React from "react";

const Select = ({ selectValue, options, className, onChange, ...props }) => {
  return (
    <>
      <select value={selectValue} {...props} className={"select " + className} onChange={onChange}>
        {options.map(({ value, text }) => (
          <option key={value} value={text}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

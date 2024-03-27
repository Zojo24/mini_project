import '../styles/components/form.css';

import React from 'react';

const Select = ({ selectValue, options, onChange, ...props }) => {
  return (
    <>
      <select
        value={selectValue}
        {...props}
        className="select"
        onChange={onChange}
      >
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

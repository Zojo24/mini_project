import React from "react";

const Radio = ({ id, value, color, name, checked, onChange, className }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <>
      <input type="radio" id={id} name={name} className={`radio ${color} ${className}`} onChange={handleChange} checked={checked} />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Radio;

import React from "react";

const Radio = ({ id, value, color, name, checked, onChange, ...props }) => {
  const hadleChange = () => {
    onChange(value); // onChange 이벤트를 부모 컴포넌트로 전달
  };

  return (
    <>
      <input type="radio" id={id} name={name} className={`radio ${color}`} onChange={hadleChange} checked={checked} {...props} />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Radio;

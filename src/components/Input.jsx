import React, { useState } from "react";

const Input = ({ type, className, price, ...props }) => {
  const [isNumber, setIsNumber] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formatPrice = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setIsNumber(formatPrice);
  };

  return <>{type === "textarea" ? <textarea rows={10} className="textarea"></textarea> : !price ? <input type={type} {...props} className={`input ${className}`} /> : <input type={type} {...props} onChange={handleChange} className={`input text-right ${className}`} value={isNumber} />}</>;
};

export default Input;

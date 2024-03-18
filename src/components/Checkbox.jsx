import React, { useEffect, useState } from "react";

const Checkbox = ({ id, value, color, checked, ...props }) => {
  const [ischecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  const hadleChange = () => {
    setIsChecked(!ischecked);
  };

  return (
    <>
      <input type="checkbox" id={id} className={`checkbox ${color}`} onChange={hadleChange} checked={ischecked} {...props} />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Checkbox;

import React, {
  useEffect,
  useState,
} from 'react';

const Checkbox = ({ id, children, color, checked, ...props }) => {
  const [ischecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  const hadleChange = () => {
    setIsChecked(!ischecked);
    // onChange(id);
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className={`checkbox ${color}`}
        onChange={hadleChange}
        checked={ischecked}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default Checkbox;

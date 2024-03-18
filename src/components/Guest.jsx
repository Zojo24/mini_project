import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { TbPlus } from "react-icons/tb";
import { TbMinus } from "react-icons/tb";
import Toast from "./Toast";
import "../styles/components/guest.css";

const Guest = () => {
  const [count, setCount] = useState(1);
  const [toast, setToast] = useState(false);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setToast(true);
    }
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCount(value);
  };
  return (
    <>
      <div className="guest">
        <GoPerson />
        <span>Guest</span>
        <button onClick={handleDecrease}>
          <TbMinus />
        </button>
        <input type="number" min="1" max="99" value={count} readOnly onChange={handleChange} />
        <button onClick={handleIncrease}>
          <TbPlus />
        </button>
        <Toast onOpen={toast} onClose={() => setToast(false)} color={"red"}>
          최소 1명이상 선택해야 합니다.
        </Toast>
      </div>
    </>
  );
};

export default Guest;

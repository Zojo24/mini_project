import React from "react";
import { PiImageLight } from "react-icons/pi";

const Noimage = ({ props, className }) => {
  return (
    <div className={"relative w-32 h-20 overflow-hidden rounded-md bg-white flex justify-center items-center text-2xl text-gray-500 " + className}>
      {props.image && <img src={props.image} alt="" className="absolute inset-0 w-full h-full object-cover " />}
      <div>
        <PiImageLight />
      </div>
    </div>
  );
};

export default Noimage;

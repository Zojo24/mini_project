import React from "react";
import { PiImageLight } from "react-icons/pi";

const Noimage = ({ props, className }) => {
  return (
    <div
      className={
        "relative w-32 h-20 overflow-hidden rounded-md flex justify-center items-center text-2xl text-gray-500 " +
        className
      }
    >
      {props.image && (
        <img
          src={URL.createObjectURL(props.image)} //이미지 미리보기 캐시로 저장됨. 데이터화 된것이 아님..
          alt=""
          className="absolute inset-0 w-full h-full object-cover "
        />
      )}
      <div>
        <PiImageLight />
      </div>
    </div>
  );
};

export default Noimage;

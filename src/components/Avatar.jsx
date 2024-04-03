import React from "react";
import profile from "../assets/hotel2.jpg";
import { IoCameraOutline } from "react-icons/io5";

const Avatar = ({ className, add, profileImage, onImageUpload, ...props }) => {
  const imageSrc = profileImage || profile;

  return (
    <div
      className={`overflow-hidden rounded-full inline-block relative  w-20 h-20  ${className}`}
    >
      <img src={imageSrc} alt="" className="w-full h-full object-cover" />
      {add && (
        <>
          <label
            htmlFor="avatar"
            className="absolute left-0 top-0 w-full h-full bg-black/0 hover:bg-black/30 hover:text-white  text-white/0 flex flex-col items-center justify-center text-xs cursor-pointer transition-all duration-500"
          >
            <IoCameraOutline className="w-7 h-7" />
            Upload
          </label>
          <input
            type="file"
            id="avatar"
            className="opacity-0 absolute -z-10 left-0 top-0 w-full h-full"
            onChange={onImageUpload}
          />
        </>
      )}
    </div>
  );
};

export default Avatar;

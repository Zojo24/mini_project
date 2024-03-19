import React from "react";

const RoomPicture = ({ className, image, ...props }) => {
  return (
    <div className={`room-list__picture ${className}`} {...props}>
      <img src={image} alt="" />
    </div>
  );
};

export default RoomPicture;

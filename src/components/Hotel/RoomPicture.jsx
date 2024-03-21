import React from "react";

const RoomPicture = ({ className, image, size, ...props }) => {
  return (
    <div className={`room-list__picture ${className} ${size}`} {...props}>
      {image && <img src={image} alt="" />}
    </div>
  );
};

export default RoomPicture;

import React from "react";

const RoomPicture = ({ image, ...props }) => {
  return (
    <div className="room-list__picture" {...props}>
      <img src={image} alt="" />
    </div>
  );
};

export default RoomPicture;

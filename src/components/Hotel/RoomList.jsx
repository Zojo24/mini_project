import React from "react";
import RoomListItems from "./RoomListItems";
import "../../styles/components/room.css";

const RoomList = ({ className, edit, ...props }) => {
  return (
    <ul className={`room-list ${className}`} {...props}>
      <RoomListItems edit={edit} />
    </ul>
  );
};

export default RoomList;

import React from "react";
import RoomListItems from "./RoomListItems";
import "../../styles/components/room.css";

const RoomList = ({ className }) => {
  return (
    <ul className={`room-list ${className}`}>
      <RoomListItems />
    </ul>
  );
};

export default RoomList;

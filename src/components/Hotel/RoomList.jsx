import '../../styles/components/room.css';

import React from 'react';

import RoomListItems from './RoomListItems';

const RoomList = ({ roomLists, className, edit, ...props }) => {
  return (
    <ul className={`room-list ${className}`} {...props}>
      <RoomListItems roomLists={roomLists} edit={edit} />
    </ul>
  );
};

export default RoomList;

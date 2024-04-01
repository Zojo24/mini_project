import '../../../styles/components/room.css';

import React from 'react';

import RoomItemsFromRegister from './RoomItemsFromRegister';

const RoomListFromRegister = ({ roomLists, className, edit, ...props }) => {
  return (
    <ul className={`room-list ${className}`} {...props}>
      <RoomItemsFromRegister roomLists={roomLists} edit={edit} />
    </ul>
  );
};

export default RoomListFromRegister;

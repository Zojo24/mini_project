import '../../../styles/components/room.css';

import React from 'react';

import RoomListItemsToRead from './RoomListsITemstoRead';

const RoomListToRead = ({ roomLists, className, edit, ...props }) => {
  return (
    <ul className={`room-list ${className}`} {...props}>
      <RoomListItemsToRead roomLists={roomLists} edit={edit} />
    </ul>
  );
};

export default RoomListToRead;

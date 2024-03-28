import '../../../styles/components/room.css';

import React from 'react';

import RoomListItemsToRead from './RoomListsITemstoRead';

const RoomListToRead = ({ className, edit, ...props }) => {
  return (
    <ul className={`room-list ${className}`} {...props}>
      <RoomListItemsToRead edit={edit} />
    </ul>
  );
};

export default RoomListToRead;

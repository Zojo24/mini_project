import React from 'react';

import { BsFillPeopleFill } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { GrOverview } from 'react-icons/gr';
import { LuBed } from 'react-icons/lu';

import { useRoomStore } from '../../store/roomStore';

const RoomOptions = ({
  bedtype,
  capacity,
  maximum,
  view,
  adult_fare,
  child_fare,
}) => {
  const { rooms } = useRoomStore();
  return (
    <div className="room-option">
      <ul>
        <li>
          <LuBed />
          {bedtype}
        </li>
        <li>
          <GoPeople />
          {capacity}
        </li>
        <li>
          <BsFillPeopleFill />
          {maximum}
        </li>
        <li>
          <GrOverview />
          {view}
        </li>
      </ul>
      <ul className="room-option__price">
        <li>
          <span>성인 1인 숙박</span> : {adult_fare} ₩
        </li>
        <li>
          <span>어린이 1인 숙박</span> : {child_fare} ₩
        </li>
      </ul>
    </div>
  );
};

export default RoomOptions;

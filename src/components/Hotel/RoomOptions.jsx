import React from "react";
import { LuBed } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { MdOutlineHotel } from "react-icons/md";

const RoomOptions = () => {
  return (
    <div className="room-option">
      <ul>
        <li>
          <LuBed />
          더블베드
        </li>
        <li>
          <GoPeople />
          객실 기준인원 4
        </li>
        <li>
          <BsFillPeopleFill />
          객실 최대인원 5
        </li>
        <li>
          <GrOverview />
          가든뷰
        </li>
      </ul>
      <ul className="room-option__price">
        <li>
          <span>성인 1인 숙박</span> : 1,000원
        </li>
        <li>
          <span>어린이 1인 숙박</span> : 1,000원
        </li>
      </ul>
    </div>
  );
};

export default RoomOptions;

import React from "react";
import { LuBed } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";

const RoomOptions = () => {
  return (
    <ul className="room-option">
      <li>
        <LuBed />
        더블베드
        {/* 트윈 + 더블베드 || 킹 || 퀸 || 싱글 x 2 || */}
      </li>
      <li>
        <GoPeople />
        객실 최소인원 4
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
  );
};

export default RoomOptions;

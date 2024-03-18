import React from "react";
import { FaSwimmer } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoWifi } from "react-icons/io5";
import { MdOutlineDryCleaning } from "react-icons/md";
import { LuBaggageClaim } from "react-icons/lu";
import { LuShoppingBasket } from "react-icons/lu";
import { TbIroningSteam } from "react-icons/tb";
import { FaShower } from "react-icons/fa6";
import { GiBugleCall } from "react-icons/gi";
import { MdSportsBar } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuLampDesk } from "react-icons/lu";
import { PiTelevisionBold } from "react-icons/pi";
import { MdLock } from "react-icons/md";

import "../../styles/components/servicelist.css";

const ServiceList = ({ className, ...props }) => {
  return (
    <ul className={"service-list " + className}>
      <li>
        <FaSwimmer />
        수영장
      </li>
      <li>
        <ImSpoonKnife />
        조식뷔페
      </li>
      <li>
        <IoWifi />
        무선인터넷
      </li>
      <li>
        <MdOutlineDryCleaning />
        드라이클리닝
      </li>
      <li>
        <LuBaggageClaim />
        여행가방 보관 서비스
      </li>
      <li>
        <LuShoppingBasket />
        편의점
      </li>
      <li>
        <TbIroningSteam />
        다림질도구
      </li>
      <li>
        <GiBugleCall />
        모닝콜
      </li>
      <li>
        <MdSportsBar />
        미니바
      </li>
      <li>
        <FaShower />
        샤워실
      </li>
      <li>
        <TbAirConditioning />
        에어컨
      </li>
      <li>
        <LuLampDesk />
        책상
      </li>
      <li>
        <PiTelevisionBold />
        TV
      </li>
      <li>
        <MdLock />
        안전금고
      </li>
    </ul>
  );
};

export default ServiceList;

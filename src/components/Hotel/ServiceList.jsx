import '../../styles/components/servicelist.css';

import React from 'react';

import { BiSolidDrink } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { FaSwimmer } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa6';
import { GiBugleCall } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { IoWifi } from 'react-icons/io5';
import {
  LuBaggageClaim,
  LuLampDesk,
  LuParkingCircle,
  LuShoppingBasket,
} from 'react-icons/lu';
import {
  MdLock,
  MdOutlineDryCleaning,
  MdSportsBar,
} from 'react-icons/md';
import { PiTelevisionBold } from 'react-icons/pi';
import { SlCup } from 'react-icons/sl';
import {
  TbAirConditioning,
  TbIroningSteam,
} from 'react-icons/tb';
import { useParams } from 'react-router-dom';

import { usehotelListStore } from '../../store/hotelListStore';

const ServiceList = ({ className, ...props }) => {
  let { hotelId } = useParams();
  const { totalHotels } = usehotelListStore();
  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));
  // console.log("thishotel", thisHotel);
  const options = thisHotel?.options;
  return (
    <ul className={"service-list " + className}>
      {options?.swimming_pool ? (
        <li>
          <FaSwimmer />
          수영장
        </li>
      ) : null}
      {options?.break_fast ? (
        <li>
          <ImSpoonKnife />
          조식뷔페
        </li>
      ) : null}

      {options?.wireless_internet ? (
        <li>
          <IoWifi />
          무선인터넷
        </li>
      ) : null}
      {options?.dry_cleaning ? (
        <li>
          <MdOutlineDryCleaning />
          드라이클리닝
        </li>
      ) : null}

      {options?.storage_service && (
        <li>
          <LuBaggageClaim />
          여행가방 보관 서비스
        </li>
      )}
      {options?.convenience_store && (
        <li>
          <LuShoppingBasket />
          편의점
        </li>
      )}
      {options?.ironing_tools && (
        <li>
          <TbIroningSteam />
          다림질도구
        </li>
      )}
      {options?.wakeup_call && (
        <li>
          <GiBugleCall />
          모닝콜
        </li>
      )}
      {options?.mini_bar && (
        <li>
          <MdSportsBar />
          미니바
        </li>
      )}
      {options?.shower_room && (
        <li>
          <FaShower />
          샤워실
        </li>
      )}
      {options?.air_conditioner && (
        <li>
          <TbAirConditioning />
          에어컨
        </li>
      )}
      {options?.table && (
        <li>
          <LuLampDesk />
          책상
        </li>
      )}
      {options?.tv && (
        <li>
          <PiTelevisionBold />
          TV
        </li>
      )}
      {options?.safety_deposit_box && (
        <li>
          <MdLock />
          안전금고
        </li>
      )}
      {options?.welcome_drink && (
        <li>
          <BiSolidDrink />
          웰컴 드링크
        </li>
      )}
      {options?.free_parking && (
        <li>
          <LuParkingCircle />
          무료 주차
        </li>
      )}
      {options?.fitness && (
        <li>
          <CgGym />
          피트니스 시설
        </li>
      )}
      {options?.electric_kettle && (
        <li>
          <SlCup />
          전기주전자
        </li>
      )}
    </ul>
  );
};

export default ServiceList;

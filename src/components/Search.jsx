import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { PiBed } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { BiWon } from "react-icons/bi";

import Select from "./Select";
import Guest from "./Guest";
import "../styles/components/search.css";
// import { Today } from "../store/todayStore";

const where = [
  {
    value: "NATION",
    text: "어디에 머물고 싶으세요?",
  },
  {
    value: "THAILAND",
    text: "태국",
  },
  {
    value: "VIETNAM",
    text: "베트남",
  },
  {
    value: "PHILIPPINES",
    text: "필리핀",
  },
  {
    value: "MALAYSIA",
    text: "말레이시아",
  },
  {
    value: "TAIWAN",
    text: "대만",
  },
];
const viewKind = [
  {
    value: "STANDARD",
    text: "스탠다드 룸",
  },
  {
    value: "DELUXE",
    text: "디럭스 룸",
  },
  {
    value: "TWIN",
    text: "트윈 룸",
  },
  {
    value: "SWEET",
    text: "스위트 룸",
  },
];
const viewOption = [
  {
    value: "OCEAN",
    text: "오션뷰",
  },
  {
    value: "CITY",
    text: "시티뷰",
  },
  {
    value: "GARDEN",
    text: "가든뷰",
  },
  {
    value: "RIVER",
    text: "리버뷰",
  },
  {
    value: "MOUNTAIN",
    text: "마운틴뷰",
  },
  {
    value: "NONE",
    text: "뷰없음",
  },
];
const priceOption = [
  {
    value: "ALL",
    text: "모든 가격",
  },
  {
    value: "select1",
    text: "1만원 ~ 10만원",
  },
  {
    value: "select2",
    text: "10만원 ~ 30만원",
  },
  {
    value: "select3",
    text: "30만원 ~ 50만원",
  },
  {
    value: "select4",
    text: "50만원 ~ 100만원",
  },
  {
    value: "select5",
    text: "100만원 ~",
  },
];

const Today = (nextDay = 0) => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate() + nextDay;

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

const Search = () => {
  const [isStart, setIsStart] = useState(Today());
  const [isEnd, setIsEnd] = useState(Today(1));
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [viewType, setViewType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [guestNumber, setGuestNumber] = useState("");

  const handleStart = (value) => {
    console.log(value);
    setIsStart(value);
  };
  const handleEnd = (value) => {
    console.log(value);
    setIsEnd(value);
  };

  // 결과값
  // console.log(`isStart ${isStart}`);
  // console.log(`isEnd ${isEnd}`);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleRoomType = (e) => {
    setRoomType(e.target.value);
  };

  const handleViewType = (e) => {
    setViewType(e.target.value);
  };

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleGuestNumber = (e) => {
    setGuestNumber(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(
      `지역: ${location}, 객실 종류: ${roomType}, 뷰 종류: ${viewType}, 가격 범위: ${priceRange}, 인원 수: ${guestNumber}, 시작일: ${isStart}, 종료일: ${isEnd}`
    );
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <div>
        <div className="search__title">
          <span>
            <SlLocationPin />
          </span>
          <b>지역</b>
        </div>
        <Select options={where} onChange={handleLocation} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <PiBed />
          </span>
          <b>객실 종류</b>
        </div>
        <Select options={viewKind} onChange={handleRoomType} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GrView />
          </span>
          <b>뷰 종류</b>
        </div>
        <Select options={viewOption} onChange={handleViewType} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <BiWon />
          </span>
          <b>1박당 요금</b>
        </div>
        <Select options={priceOption} onChange={handlePriceRange} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GoPeople />
          </span>
          <b>인원 수</b>
        </div>
        <Guest onChange={handleGuestNumber} />
      </div>
      <button type="submit" className="btn-blue xl">
        <LuSearch />
        Search
      </button>
    </form>
  );
};

export default Search;

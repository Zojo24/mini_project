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
    value: "select1",
    text: "어디에 머물고 싶으세요?",
  },
  {
    value: "select2",
    text: "태국",
  },
  {
    value: "select3",
    text: "베트남",
  },
  {
    value: "select4",
    text: "필리핀",
  },
  {
    value: "select5",
    text: "말레이시아",
  },
  {
    value: "select6",
    text: "대만",
  },
];
const viewKind = [
  {
    value: "select1",
    text: "스탠다드 룸",
  },
  {
    value: "select2",
    text: "디럭스 룸",
  },
  {
    value: "select3",
    text: "트윈 룸",
  },
  {
    value: "select4",
    text: "스위트 룸",
  },
];
const viewOption = [
  {
    value: "select1",
    text: "오션뷰",
  },
  {
    value: "select2",
    text: "시티뷰",
  },
  {
    value: "select3",
    text: "가든뷰",
  },
  {
    value: "select4",
    text: "리버뷰",
  },
  {
    value: "select5",
    text: "마운틴뷰",
  },
  {
    value: "select6",
    text: "뷰없음",
  },
];
const priceOption = [
  {
    value: "select6",
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

  return (
    <form className="search">
      <div>
        <div className="search__title">
          <span>
            <SlLocationPin />
          </span>
          <b>지역</b>
        </div>
        <Select options={where} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <PiBed />
          </span>
          <b>객실 종류</b>
        </div>
        <Select options={viewKind} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GrView />
          </span>
          <b>뷰 종류</b>
        </div>
        <Select options={viewOption} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <BiWon />
          </span>
          <b>1박당 요금</b>
        </div>
        <Select options={priceOption} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GoPeople />
          </span>
          <b>인원 수</b>
        </div>
        <Guest />
      </div>
      <button className="btn-blue xl">
        <LuSearch />
        Search
      </button>
    </form>
  );
};

export default Search;

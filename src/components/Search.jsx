import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarPlus } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import Select from "./Select";
import Input from "./Input";
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
    text: "필리핀",
  },
  {
    value: "select3",
    text: "태국",
  },
  {
    value: "select4",
    text: "말레이시아",
  },
  {
    value: "select5",
    text: "일본",
  },
  {
    value: "select6",
    text: "캄보디아",
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
            <LuCalendarPlus />
          </span>
          <b>체크인</b>
        </div>
        <Input type="date" min={Today()} value={isStart} onChange={handleStart} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <LuCalendarPlus />
          </span>
          <b>체크아웃</b>
        </div>
        <Input type="date" min={isStart ? isStart : Today(1)} value={isEnd} onChange={handleEnd} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GoPeople />
          </span>
          <b>숙박 인원수</b>
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

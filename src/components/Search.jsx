import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarPlus } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import Select from "./Select";
import Input from "./Input";
import Guest from "./Guest";
import "../styles/components/search.css";
import { Today } from "../store/todayStore";

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

const Search = () => {
  const [isStart, setIsStart] = useState("");

  const handleStart = (e) => {
    setIsStart(e.target.value);
  };

  return (
    <div className="search">
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
        <Input type="date" min={Today()} defaultValue={Today()} onChange={handleStart} />
      </div>
      <div>
        <div className="search__title">
          <span>
            <LuCalendarPlus />
          </span>
          <b>체크아웃</b>
        </div>
        <Input type="date" min={isStart ? isStart : Today(1)} defaultValue={Today(1)} />
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
    </div>
  );
};

export default Search;

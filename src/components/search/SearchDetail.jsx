import React from "react";
import Input from "../Input";
import Select from "../Select";
import { IoSearch } from "react-icons/io5";

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

const SearchDetail = () => {
  return (
    <form>
      <div className="flex gap-2">
        <Select options={where} />
        <Input type={"text"} placeholder="호텔명을 입력하세요." />
        <button className="btn-blue xl">
          <IoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchDetail;

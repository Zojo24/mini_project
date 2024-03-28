import React from "react";
import Input from "../Input";
import Select from "../Select";
import { IoSearch } from "react-icons/io5";

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

const SearchDetail = () => {
  return (
    <form className=" mobile:w-full tablet:w-auto">
      <div className="mobile:grid mobile:grid-cols-1 tablet:flex gap-2">
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

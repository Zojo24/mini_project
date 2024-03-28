import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { IoSearch } from "react-icons/io5";
import Loading2 from "../Loading";
import useFetchHotels from "../../hooks/useFetchHotels";

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
  const [selectedWhere, setSelectedWhere] = useState("");
  const [hotelName, setHotelName] = useState("");
  const { isLoading2, fetchHotels } = useFetchHotels();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedWhere, hotelName);
    await fetchHotels(selectedWhere, hotelName);
  };

  const handleType = (value) => {
    setHotelName(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 relative">
        <Select
          options={where}
          onChange={(e) => setSelectedWhere(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder="호텔명을 입력하세요."
          value={hotelName}
          onChange={handleType}
        />
        <button type="submit" className="btn-blue xl">
          <IoSearch />
        </button>
        {isLoading2 && <Loading2 />}
      </div>
    </form>
  );
};

export default SearchDetail;

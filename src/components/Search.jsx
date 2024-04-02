import React, { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { PiBed } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { BiWon } from "react-icons/bi";
import axios from "axios";
import Select from "./Select";
import Guest from "./Guest";
import "../styles/components/search.css";
import Loading2 from "./Loading2";
import { useSearchStore } from "../store/searchStore";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

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
    value: "select 1",
    text: "----",
  },
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
    value: "select 1",
    text: "----",
  },
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

const Search = ({ ...props }) => {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [viewType, setViewType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [isLoading2, setIsLoading2] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchToast, setSearchToast] = useState(false);
  const navigate = useNavigate();

  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  const handleLocation = (e) => {
    const selectedLocationText = e.target.value;
    const selectedLocationOption = where.find(
      (option) => option.text === selectedLocationText
    );
    setLocation(selectedLocationOption.value);
  };

  const handleRoomType = (e) => {
    const selectedRoomTypeText = e.target.value;
    const selectedRoomTypeOption = viewKind.find(
      (option) => option.text === selectedRoomTypeText
    );
    setRoomType(selectedRoomTypeOption.value);
  };

  const handleViewType = (e) => {
    const selectedViewTypeText = e.target.value;
    const selectedViewTypeOption = viewOption.find(
      (option) => option.text === selectedViewTypeText
    );
    setViewType(selectedViewTypeOption.value);
  };

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleGuestNumber = (e) => {
    setGuestNumber(e.target.value);
  };

  // 호텔 검색하기
  const handleSearch = async (e) => {
    e.preventDefault();

    // 지역 필드 검증
    if (!location || location === "NATION") {
      setSearchError("지역을 선택해주세요.");
      setSearchToast(true);
      return;
    }

    // 객실 종류 필드 검증
    if (!roomType || roomType === "select 1") {
      setSearchError("객실 종류를 선택해주세요.");
      setSearchToast(true);
      return;
    }

    // 뷰 종류 필드 검증
    if (!viewType || viewType === "select 1") {
      setSearchError("뷰 종류를 선택해주세요.");
      setSearchToast(true);
      return;
    }

    setIsLoading2(true);

    try {
      const response = await axios.get(
        `http://52.78.12.252:8080/api/hotels/search/?nation=${location}&roomType=${roomType}&viewType=${viewType}`
      );
      if (response.data.result.content.length === 0) {
        alert("검색 결과가 없습니다.");
        return;
      } else {
        setSearchResults(response.data.result.content);
        navigate("/search/result");
      }
    } catch (error) {
      console.error("호텔 검색에 실패했습니다:", error);
      setSearchResults([]);
    } finally {
      setIsLoading2(false);
    }
  };

  return (
    <form className="search relative" onSubmit={handleSearch} {...props}>
      {isLoading2 && <Loading2 />}
      <div>
        <div className="search__title">
          <span>
            <SlLocationPin />
          </span>
          <b>지역</b>
        </div>
        <Select
          options={where}
          onChange={handleLocation}
          className={"mobile:!w-full tablet:!w-auto"}
        />
      </div>
      <div>
        <div className="search__title">
          <span>
            <PiBed />
          </span>
          <b>객실 종류</b>
        </div>
        <Select
          options={viewKind}
          onChange={handleRoomType}
          className={"mobile:!w-full tablet:!w-auto"}
        />
      </div>
      <div>
        <div className="search__title">
          <span>
            <GrView />
          </span>
          <b>뷰 종류</b>
        </div>
        <Select
          options={viewOption}
          onChange={handleViewType}
          className={"mobile:!w-full tablet:!w-auto"}
        />
      </div>
      <div>
        <div className="search__title">
          <span>
            <BiWon />
          </span>
          <b>1박당 요금</b>
        </div>
        <Select
          options={priceOption}
          onChange={handlePriceRange}
          className={"mobile:!w-full tablet:!w-auto"}
        />
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
      <button type="submit" className="btn-blue xl mobile:col-span-2">
        <LuSearch />
        Search
      </button>
      <Toast
        color={"red"}
        onOpen={searchToast}
        onClose={() => setSearchToast(false)}
      >
        {searchError}
      </Toast>
    </form>
  );
};

export default Search;

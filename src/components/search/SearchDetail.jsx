import React, { useState, useEffect } from "react";
import Input from "../Input";
import Select from "../Select";
import { IoSearch } from "react-icons/io5";
import Loading2 from "../Loading";
import { useSearchStore } from "../../store/searchStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [selectedNation, setSelectedNation] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [isLoading2, setIsLoading2] = useState(false);
  const navigate = useNavigate();
  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  const handleNation = (e) => {
    setSelectedNation(e.target.value);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNation === "NATION" || !hotelName.trim()) {
      alert("국가와 호텔명을 모두 입력해주세요.");
      return;
    }

    setIsLoading2(true);
    try {
      const response = await axios.get(
        `http://52.78.12.252:8080/api/hotels/name/${hotelName}/nation/${selectedNation}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setSearchResults(response.data.result.content);
      navigate("/search/result");
      console.log(response);
    } catch (error) {
      console.error("호텔 검색에 실패했습니다:", error);
      setSearchResults([]);
    } finally {
      setIsLoading2(false);
    }
  };

  const handleType = (value) => {
    setHotelName(value);
  };

  return (
    <form className=" mobile:w-full tablet:w-auto" onSubmit={handleSubmit}>
      <div className="mobile:grid mobile:grid-cols-1 tablet:flex gap-2 relative">
        <Select options={where} onChange={handleNation} />
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

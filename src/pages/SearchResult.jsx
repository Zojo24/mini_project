import React, { useEffect, useState } from "react";

import { FaArrowDownShortWide } from "react-icons/fa6";
import { TbRotateClockwise2 } from "react-icons/tb";

import subvisual from "../assets/subvisual1.jpg";
import Destinations from "../components/Destinations";
import Heading from "../components/Heading";
import ResultList from "../components/Hotel/ResultList";
import SearchDetail from "../components/Search/SearchDetail";
import { useVisualStore } from "../store/visualStore";
import { useSearchStore } from "../store/searchStore";

const SearchResult = () => {
  const { setTitle } = useVisualStore();
  const [isLoading, setIsLoading] = useState(false);

  const searchResults = useSearchStore((state) => state.searchResults);

  useEffect(() => {
    setTitle("Trip Hotel List", subvisual);
  }, [setTitle, searchResults]);

  const handleMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="main pb-20">
      <div className="container">
        <Destinations className="sub" />
        <Heading tag={"h3"} text={"검색 결과"} className={"xl mt-10"} />
        <div className="flex mobile:flex-col tablet:flex-row justify-between items-center mt-10 mb-5">
          <div className="text-2xl mobile:mb-3 tablet:mb-0">
            <strong className="">{searchResults.length}개</strong>
            <span className="font-light">의 호텔이 있습니다.</span>
          </div>
          <SearchDetail />
        </div>
        <ResultList hotels={searchResults} />
        <div className="text-center mt-10">
          <button className="btn-blue xl" onClick={handleMore}>
            {isLoading ? (
              <TbRotateClockwise2 className="animate-spin" />
            ) : (
              <FaArrowDownShortWide />
            )}
            {isLoading ? "Loading..." : "호텔 더보기"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

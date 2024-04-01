import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchStore } from "../store/searchStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPopup = ({ open, close, onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();
  const body = document.body;
  const navigate = useNavigate();
  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      body.style.overflow = "visible";
    }
  }, [open]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://52.78.12.252:8080/api/hotels/name/${searchTerm}`
      );
      setSearchResults(response.data.result.content);
      navigate("/search/result");
      ref.current.close();
      setSearchTerm("");
    } catch (error) {
      console.error("호텔 검색에 실패했습니다:", error);
      setSearchResults([]);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClose = (e) => {
    ref.current.close();
  };
  return (
    <dialog ref={ref} onClose={close} className="search-popup" {...props}>
      <div>
        <div className="search-popup__wrap">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
        <button className="search-popup__close" onClick={handleClose}>
          <IoCloseOutline />
        </button>
      </div>
    </dialog>
  );
};

export default SearchPopup;

import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useSearchStore } from "../store/searchStore";

const SearchPopup = ({ open, close, onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();
  const body = document.body;
  const setSearchTermStore = useSearchStore((state) => state.setSearchTerm);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      body.style.overflow = "visible";
    }
  }, [open]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTermStore(searchTerm);
    localStorage.setItem("lastSearch", searchTerm);
    onSearch(searchTerm);
    ref.current.close();
    console.log(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClose = (e) => {
    e.preventDefault();
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

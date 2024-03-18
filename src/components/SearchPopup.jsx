import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const SearchPopup = ({ open, close, ...props }) => {
  const ref = useRef();
  const body = document.body;

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      body.style.overflow = "visible";
    }
  }, [open]);

  const handleClose = (e) => {
    e.preventDefault();
    ref.current.close();
  };
  return (
    <dialog ref={ref} onClose={close} className="search-popup" {...props}>
      <div>
        <div className="search-popup__wrap">
          <form action="">
            <input type="search" placeholder="검색어를 입력하세요." />
            <button>
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

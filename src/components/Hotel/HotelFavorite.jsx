import React, { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";

const HotelFavorite = ({ ...props }) => {
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    setIsFav(!isFav);
  };
  return (
    <button className="hotel__fav" onClick={handleClick} {...props}>
      {!isFav ? <HiOutlineHeart /> : <HiMiniHeart className="--active" />}
    </button>
  );
};

export default HotelFavorite;

import React from "react";
import HotelListItems from "./HotelListItems";
import "../../styles/components/hotel.css";

const HotelList = ({ modify, className, ...props }) => {
  return (
    <>
      <ul className={`hotel ${className}`} {...props}>
        <HotelListItems modify={modify} />
      </ul>
    </>
  );
};

export default HotelList;

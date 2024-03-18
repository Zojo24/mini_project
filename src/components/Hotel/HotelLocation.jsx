import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HotelLocation = ({ className, location }) => {
  return (
    <div className={`hotel__location ${className}`}>
      <HiOutlineLocationMarker />
      {location}
    </div>
  );
};

export default HotelLocation;

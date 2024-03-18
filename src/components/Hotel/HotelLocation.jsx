import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HotelLocation = ({ location }) => {
  return (
    <div className="hotel__location">
      <HiOutlineLocationMarker />
      {location}
    </div>
  );
};

export default HotelLocation;

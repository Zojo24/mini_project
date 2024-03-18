import React from "react";
import HotelPicture from "./HotelPicture";
import HotelLocation from "./HotelLocation";
import HotelFavorite from "./HotelFavorite";
import HotelPrice from "./HotelPrice";
import HotelBooking from "./HotelBooking";
import hotel1 from "../../assets/hotel1.jpg";
import HotelTitle from "./HotelTitle";

const HotelListItems = ({ modify, ...props }) => {
  return (
    <>
      <li>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          <HotelBooking />
        </div>
      </li>
      <li>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          <HotelBooking />
        </div>
      </li>
    </>
  );
};

export default HotelListItems;

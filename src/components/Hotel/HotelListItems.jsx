import React from "react";
import HotelPicture from "./HotelPicture";
import HotelLocation from "./HotelLocation";
import HotelFavorite from "./HotelFavorite";
import HotelPrice from "./HotelPrice";
import HotelBooking from "./HotelBooking";
import hotel1 from "../../assets/hotel1.jpg";
import HotelTitle from "./HotelTitle";
import Checkbox from "../Checkbox";

const HotelListItems = ({ modify, ...props }) => {
  return (
    <>
      <li>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          <HotelBooking />
        </div>
        {modify && (
          <div className="absolute right-5 top-5">
            <Checkbox id={"a1"} color={"red"} />
          </div>
        )}
      </li>
      <li>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          <HotelBooking />
        </div>
        {modify && (
          <div className="absolute right-5 top-5">
            <Checkbox id={"a1"} color={"red"} />
          </div>
        )}
      </li>
    </>
  );
};

export default HotelListItems;

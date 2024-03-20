import React from "react";
import HotelPicture from "./HotelPicture";
import HotelLocation from "./HotelLocation";
import HotelFavorite from "./HotelFavorite";
import HotelPrice from "./HotelPrice";
import HotelBooking from "./HotelBooking";
import hotel1 from "../../assets/hotel1.jpg";
import HotelTitle from "./HotelTitle";
import Badge from "../Badge";

const HotelListItems = ({ modify, ...props }) => {
  const data = { state: "disabled" };
  return (
    <>
      <li {...props}>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          <HotelBooking text={"HotelBooking"} />
        </div>
      </li>
      <li className={data.state}>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle link={"/hoteldetail"} title={"Signature Hitanial Hotel"} />
          <HotelPrice price={"1,000,000"} />
          {data.state ? (
            <>
              <HotelBooking disabled text={"Sold Out"} />
              <Badge color={"red"}>Sold Out</Badge>
            </>
          ) : (
            <HotelBooking text={"HotelBooking"} />
          )}
        </div>
      </li>
    </>
  );
};

export default HotelListItems;

import React, { useEffect, useState } from "react";
import { useSearchStore } from "../../store/searchStore";
import hotel1 from "../../assets/hotel1.jpg";
import Badge from "../Badge";
import HotelBooking from "./HotelBooking";
import HotelFavorite from "./HotelFavorite";
import HotelLocation from "./HotelLocation";
import HotelPicture from "./HotelPicture";
import HotelPrice from "./HotelPrice";
import HotelTitle from "./HotelTitle";

const ResultListItems = ({ modify, ...props }) => {
  // const data = { state: "disabled" };
  const { searchResults } = useSearchStore((state) => state);

  useEffect(() => {}, [searchResults]);

  return (
    <>
      {searchResults.map((hotel) => (
        <li key={hotel.name} className={hotel.available ? "" : "disabled"}>
          <HotelPicture link={`/hoteldetail/${hotel.id}`} image={hotel1} />
          <div className="hotel__info">
            <HotelLocation location={hotel.nation} />
            <HotelFavorite checked={modify} />
            <HotelTitle link={`/hoteldetail/${hotel.id}`} title={hotel.name} />
            <HotelPrice price={hotel.price} />
            {hotel.available ? (
              <HotelBooking text={"HotelBooking"} />
            ) : (
              <>
                <HotelBooking disabled text={"Sold Out"} />
                <Badge color={"red"}>Sold Out</Badge>
              </>
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default ResultListItems;

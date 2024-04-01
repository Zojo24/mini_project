import React, { useEffect, useState } from "react";

import axios from "axios";

import hotel1 from "../../assets/hotel1.jpg";
import { digit3 } from "../../store/digit3";
import { usehotelListStore } from "../../store/hotelListStore";
import Badge from "../Badge";
import HotelBooking from "./HotelBooking";
import HotelFavorite from "./HotelFavorite";
import HotelLocation from "./HotelLocation";
import HotelPicture from "./HotelPicture";
import HotelPrice from "./HotelPrice";
import HotelTitle from "./HotelTitle";

const HotelListItems = ({ modify, ...props }) => {
  const data = { state: "disabled" };

  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios.get("http://52.78.12.252:8080/api/hotels").then((response) => {
      console.log(response.data.result.content);
      setHotels(response.data.result.content);
    });
  }, []);
  const totalHotels = usehotelListStore((state) => state.totalHotels);

  // console.log(totalHotels);
  return (
    <>
      {hotels.map((hotel) => (
        <li
          key={hotel.name}
          className={hotel.active_status === "ACTIVE" ? "" : "disabled"}
        >
          <HotelPicture link={`/hoteldetail/${hotel.id}`} image={hotel1} />
          <div className="hotel__info">
            <HotelLocation location={hotel.nation} />
            <HotelFavorite checked={modify} />
            <HotelTitle link={`/hoteldetail/${hotel.id}`} title={hotel.name} />
            <HotelPrice price={digit3(hotel.rooms[0]?.standard_price)} />
            {hotel.active_status === "ACTIVE" ? (
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
      {totalHotels.map((hotel) => (
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

export default HotelListItems;

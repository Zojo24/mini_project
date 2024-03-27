import React, { useEffect, useState } from "react";

import axios from "axios";

import hotel1 from "../../assets/hotel1.jpg";
import { HotelListsData } from "../../data/hotelLists";
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
    axios.get("/hotels").then((response) => {
      setHotels(response.data[0]);
      // console.log("불러온값", response.data[0]);
    });
  }, []);
  const totalHotels = usehotelListStore((state) => state.totalHotels);

  console.log(totalHotels);
  return (
    <>
      {/* <li>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle
            link={"/hoteldetail"}
            title={"Signature Hitanial Hotel"}
          />
          <HotelPrice price={"500,000"} />
          <HotelBooking text={"HotelBooking"} />
        </div>
      </li>
      <li className={data.state}>
        <HotelPicture link={"/hoteldetail"} image={hotel1} />
        <div className="hotel__info">
          <HotelLocation location={"Japan"} />
          <HotelFavorite checked={modify} />
          <HotelTitle
            link={"/hoteldetail"}
            title={"Signature Hitanial Hotel"}
          />
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
      </li> */}
      {/* {HotelListsData.map((hotel) => (
        <li key={hotel.name}>
          <HotelPicture link={`/hoteldetail/${hotel.id}`} image={hotel1} />
          <div className="hotel__info">
            <HotelLocation location={hotel.location} />
            <HotelFavorite checked={modify} />
            <HotelTitle link={"/hoteldetail"} title={hotel.name} />
            <HotelPrice price={digit3(hotel.price)} />
            <HotelBooking text={"HotelBooking"} />
          </div>
        </li>
      ))} */}
      {totalHotels.map((hotel) => (
        <li key={hotel.name} className={hotel.available ? "" : "disabled"}>
          <HotelPicture link={`/hoteldetail/${hotel.id}`} image={hotel1} />
          <div className="hotel__info">
            <HotelLocation location={hotel.location} />
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

import React, { useEffect, useState } from "react";

import axios from "axios";

import hotel1 from "../../assets/hotel1.jpg";
import { HotelistsData } from "../../data/hotelLists";
import { newHotelsData } from "../../mocks/handlers";
import { digit3 } from "../../store/digit3";
import Badge from "../Badge";
import HotelBooking from "./HotelBooking";
import HotelFavorite from "./HotelFavorite";
import HotelLocation from "./HotelLocation";
import HotelPicture from "./HotelPicture";
import HotelPrice from "./HotelPrice";
import HotelTitle from "./HotelTitle";

const HotelListItems = ({ modify, ...props }) => {
  const data = { state: "disabled" };
  // const { hotelLists } = useHotelStore();
  // console.log(hotelLists);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios.get("/hotels").then((response) => {
      setHotels(response.data[0]);
      console.log("불러온값", response.data[0]);
    });
  }, []);
  console.log("메인", hotels);
  return (
    <>
      <li>
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
      </li>
      {HotelistsData.map((hotel) => (
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
      ))}
      {newHotelsData.map((hotel) => (
        <li key={hotel.name}>
          <HotelPicture link={`/hoteldetail/${hotel.id}`} image={hotel1} />
          <div className="hotel__info">
            <HotelLocation location={hotel.location} />
            <HotelFavorite checked={modify} />
            <HotelTitle link={"/hoteldetail"} title={hotel.name} />
            <HotelPrice price={"1,000,000"} />
            <HotelBooking text={"HotelBooking"} />
          </div>
        </li>
      ))}
    </>
  );
};

export default HotelListItems;

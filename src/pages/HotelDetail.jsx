import React, { useEffect } from "react";
import { useVisualStore } from "../store/visualStore";
import HotelLocation from "../components/Hotel/HotelLocation";
import HotelPrice from "../components/Hotel/HotelPrice";
import HotelFavorite from "../components/Hotel/HotelFavorite";
import HotelGallery from "../components/Hotel/HotelGallery";
import pic1 from "../assets/hotelroom1.jpeg";
import pic2 from "../assets/hotelroom2.jpeg";
import pic3 from "../assets/hotelroom3.jpeg";
import pic4 from "../assets/hotelroom4.jpeg";
import Box from "../components/Box";
import Heading from "../components/Heading";
import Text from "../components/Text";
import ServiceList from "../components/Hotel/ServiceList";
import HotelRules from "../components/Hotel/HotelRules";
import RoomList from "../components/Hotel/RoomList";
import ReservationFirst from "../components/Reservation/ReservationFirst";

const pictures = [{ src: pic1 }, { src: pic2 }, { src: pic3 }, { src: pic4 }];

const HotelDetail = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("호텔제목을 삽입하세요.");
  }, [setTitle]);

  return (
    <div className="main mb-24">
      <div className="container">
        <div className="hotel-detail mt-10">
          <div className="hotel-detail__header">
            <div>
              <HotelLocation location={"Los Angeles"} />
            </div>
            <div>
              <HotelPrice price={"500,000"} />
              <HotelFavorite />
            </div>
          </div>
        </div>
        <HotelGallery pictures={pictures} className="mt-10" />
        {/* 무조건 4개 삽입  */}
        <div className="flex relative gap-8 pt-8">
          <div className="min-h-lvh flex-1 flex gap-8  flex-col">
            <Box>
              <Heading tag={"h3"} text={"호텔 안내"} className={"base"} />
              <Text className={"mt-5"} type={1}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum rerum corrupti incidunt possimus harum hic quo voluptatibus ipsam fugit id illo sapiente recusandae natus numquam, quae aliquid? Pariatur, magnam odio?
              </Text>
            </Box>
            <Box>
              <Heading tag={"h3"} text={"편의시설 및 서비스"} className={"base"} />
              <ServiceList className={"mt-5"} />
            </Box>
            <Box>
              <Heading tag={"h3"} text={"호텔 객실 규칙"} className={"base"} />
              <HotelRules className={"mt-5"} />
            </Box>
            <Box>
              <Heading tag={"h3"} text={"예약 가능한 객실"} className={"base"} />
              <RoomList className={"mt-5"} />
            </Box>
          </div>
          <div className="sticky top-28 self-start w-[30rem]">
            <Box>
              <ReservationFirst />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;

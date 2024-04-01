import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import pic1 from "../assets/img1.webp";
import pic2 from "../assets/img2.webp";
import pic3 from "../assets/img3.webp";
import pic4 from "../assets/img4.jpg";
import Notice from "../components/Board/Notice";
import NoticeWrite from "../components/Board/NoticeWrite";
import Box from "../components/Box";
import Heading from "../components/Heading";
import RoomListToRead from "../components/Hotel/components/RoomListToRead";
import HotelFavorite from "../components/Hotel/HotelFavorite";
import HotelGallery from "../components/Hotel/HotelGallery";
import HotelLocation from "../components/Hotel/HotelLocation";
import HotelRules from "../components/Hotel/HotelRules";
import ServiceList from "../components/Hotel/ServiceList";
import Loading from "../components/Loading";
import ReservationFirst from "../components/Reservation/ReservationFirst";
import SubVisual from "../components/SubVisual";
import Text from "../components/Text";
import { usehotelListStore } from "../store/hotelListStore";
import { useVisualStore } from "../store/visualStore";

const pictures = [{ src: pic1 }, { src: pic2 }, { src: pic3 }, { src: pic4 }];

const HotelDetail = () => {
  const navigate = useNavigate();
  let { hotelId } = useParams();
  const { setTitle } = useVisualStore();

  const [isWrite, setIsWrite] = useState(false);
  const [hotelInfo, setHotelInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleWrite = () => {
    setIsWrite(!isWrite);
  };
  const { totalHotels, deleteHotel } = usehotelListStore();

  const thisHotel = totalHotels.find((hotel) => hotel.id === 4595);
  // console.log("detail", thisHotel);
  useEffect(() => {
    axios.get(`http://52.78.12.252:8080/api/hotels/${hotelId}`).then((response) => {
      setHotelInfo(response.data.result);
      // console.log(response.data.result);
    });
    // setTitle(hotelInfo.name, SubVisual);
  }, []);

  useEffect(() => {
    if (hotelInfo) {
      setTitle(hotelInfo.name, SubVisual);
    }
  }, [hotelInfo, setTitle]);

  const onDelete = () => {
    setIsLoading(true);
    deleteHotel(hotelId);
    navigate("/");
    // setTimeout(() => {
    //   setIsLoading(false);

    // }, 1500);
  };

  const toEdit = () => {
    navigate(`/hoteledit/${hotelId}`);
  };

  return (
    <div className="main mb-24">
      <div className="container">
        <div className="hotel-detail mt-10">
          <div className="hotel-detail__header">
            <div>
              <HotelLocation className={"xl"} location={hotelInfo.nation} />
            </div>
            <div>
              {/* <HotelPrice price={digit3(hotelInfo.rooms[0]?.standard_price)} /> */}
              <HotelFavorite />
              <button className="btn-blue -mr-2" onClick={toEdit}>
                수정
              </button>
              <button onClick={onDelete} className="btn-red">
                삭제
              </button>
            </div>
          </div>
        </div>
        <HotelGallery pictures={pictures} className="mt-10" />
        {/* 무조건 4개 삽입  */}

        <div className="mobile:block tablet:flex relative gap-8 pt-8">
          <div className="min-h-lvh flex-1 flex gap-8  flex-col">
            <Box>
              <Heading tag={"h3"} text={"호텔 안내"} className={"base"} />
              <Text className={"mt-5"} type={1}>
                {hotelInfo.description}
              </Text>
            </Box>
            <Box>
              <div className="flex items-center justify-between">
                <Heading tag={"h3"} text={"호텔 공지"} className={"base"} />
                <button className="btn-blue sm" onClick={handleWrite}>
                  공지 올리기
                </button>
              </div>
              {!isWrite ? <Notice className={"mt-5"} /> : <NoticeWrite className={"mt-5"} />}
            </Box>
            <Box>
              <Heading tag={"h3"} text={"편의시설 및 서비스"} className={"base"} />
              <ServiceList options={hotelInfo.basic_options} className={"mt-5"} />
            </Box>
            <Box>
              <Heading tag={"h3"} text={"호텔 객실 규칙"} className={"base"} />
              <HotelRules thisHotel={hotelInfo} className={"mt-5"} />
            </Box>
            <Box>
              <Heading tag={"h3"} text={"예약 가능한 객실"} className={"base"} />
              <RoomListToRead roomLists={hotelInfo?.rooms} className={"mt-5"} />
            </Box>
          </div>
          <div className="mobile:fixed mobile:top-[inherit] mobile:bottom-0 z-50 mobile:left-0 tablet:left-[inherit] tablet:bottom-[inherit] tablet:sticky tablet:top-28 self-start mobile:w-full tablet:w-[25rem] desktop:w-[30rem] mobile:mt-0 tablet:mt-0">
            <Box className={"mobile:!rounded-[.75rem_.75rem_0_0] tablet:!rounded-xl mobile:!p-3 tablet:!p-5"}>
              <ReservationFirst />
            </Box>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default HotelDetail;

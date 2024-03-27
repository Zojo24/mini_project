import React, {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import pic1 from '../assets/img1.webp';
import pic2 from '../assets/img2.webp';
import pic3 from '../assets/img3.webp';
import pic4 from '../assets/img4.jpg';
import subvisual from '../assets/subvisual2.jpg';
import Notice from '../components/Board/Notice';
import NoticeWrite from '../components/Board/NoticeWrite';
import Box from '../components/Box';
import Heading from '../components/Heading';
import HotelFavorite from '../components/Hotel/HotelFavorite';
import HotelGallery from '../components/Hotel/HotelGallery';
import HotelLocation from '../components/Hotel/HotelLocation';
import HotelPrice from '../components/Hotel/HotelPrice';
import HotelRules from '../components/Hotel/HotelRules';
import RoomList from '../components/Hotel/RoomList';
import ServiceList from '../components/Hotel/ServiceList';
import Loading from '../components/Loading';
import ReservationFirst from '../components/Reservation/ReservationFirst';
import Text from '../components/Text';
import { digit3 } from '../store/digit3';
import { usehotelListStore } from '../store/hotelListStore';
import { useVisualStore } from '../store/visualStore';

const pictures = [{ src: pic1 }, { src: pic2 }, { src: pic3 }, { src: pic4 }];

const HotelDetail = () => {
  const navigate = useNavigate();
  let { hotelId } = useParams();
  const { setTitle } = useVisualStore();

  const [isWrite, setIsWrite] = useState(false);
  const [hotelInfo, setHotelInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleWrite = () => {
    setIsWrite(!isWrite);
  };
  const { totalHotels, deleteHotel } = usehotelListStore();

  const thisHotel = totalHotels.find((hotel) => hotel.id === Number(hotelId));
  // console.log("detail", thisHotel);
  useEffect(() => {
    setTitle(thisHotel.name, subvisual);
  }, []);
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
  console.log(thisHotel);
  return (
    <div className="main mb-24">
      <div className="container">
        <div className="hotel-detail mt-10">
          <div className="hotel-detail__header">
            <div>
              <HotelLocation className={"xl"} location={thisHotel.nation} />
            </div>
            <div>
              <HotelPrice price={digit3(thisHotel.price)} />
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

        <div className="flex relative gap-8 pt-8">
          <div className="min-h-lvh flex-1 flex gap-8  flex-col">
            <Box>
              <Heading tag={"h3"} text={"호텔 안내"} className={"base"} />
              <Text className={"mt-5"} type={1}>
                {thisHotel.description}
              </Text>
            </Box>
            <Box>
              <div className="flex items-center justify-between">
                <Heading tag={"h3"} text={"호텔 공지"} className={"base"} />
                <button className="btn-blue sm" onClick={handleWrite}>
                  공지 올리기
                </button>
              </div>
              {!isWrite ? (
                <Notice className={"mt-5"} />
              ) : (
                <NoticeWrite className={"mt-5"} />
              )}
            </Box>
            <Box>
              <Heading
                tag={"h3"}
                text={"편의시설 및 서비스"}
                className={"base"}
              />
              {/*<ServiceList className={"mt-5"} />*/}
            </Box>
            <Box>
              <Heading tag={"h3"} text={"호텔 객실 규칙"} className={"base"} />
              {/*<HotelRules className={"mt-5"} />*/}
            </Box>
            <Box>
              <Heading
                tag={"h3"}
                text={"예약 가능한 객실"}
                className={"base"}
              />
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
      {isLoading && <Loading />}
    </div>
  );
};

export default HotelDetail;

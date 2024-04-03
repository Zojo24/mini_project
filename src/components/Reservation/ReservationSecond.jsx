import React, { useEffect, useState } from "react";
import { useVisualStore } from "../../store/visualStore";
import ReservationHotelInfo from "./ReservationHotelInfo";
import ReservationPersonInfo from "./ReservationPersonInfo";
import "../../styles/pages/reservation.css";
import subvisual from "../../assets/subvisual3.png";
import request from "../../api/request";
import instance from "../../api/axios";
import { useLocation } from "react-router-dom";

const ReservationSecond = () => {
  const token = localStorage.getItem("token");
  const { fetchMembersMyCart } = request; // 필요한 요청 URL을 추출
  const { setTitle } = useVisualStore();
  const [data, setData] = useState([]);
  const [isitem, setIsItem] = useState(null);
  const location = useLocation();
  const orderID = parseInt(location.search.replace("?", ""));

  useEffect(() => {
    setTitle("Reservation Hotels", subvisual);
  }, [setTitle]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseOrder = await instance.get(`${fetchMembersMyCart}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(responseOrder.data.result.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const findItem = () => {
      const foundItem = data.find((item) => item.id === orderID);
      setIsItem(foundItem);
    };

    findItem();
  }, [data]);
  // console.log(data);

  return (
    <div className="main pb-20">
      <div className="container">
        <div className="reservation mt-10">
          {isitem && (
            <>
              <ReservationHotelInfo {...isitem} />
              <ReservationPersonInfo {...isitem} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationSecond;

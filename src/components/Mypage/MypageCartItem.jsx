import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import RoomPicture from "../Hotel/RoomPicture";
import { Link } from "react-router-dom";
import { digit3 } from "../../store/digit3";
import { useReservationStore } from "../../store/reservationStore";

const MypageCartItem = ({ items }) => {
  const {
    adult,
    adult_fare,
    bed_type,
    child_fare,
    children,
    childrenPay,
    end,
    file,
    hotel_name,
    start,
    totalPay,
    type,
    id,
  } = items;
  const { deleteCart } = useReservationStore();

  return (
    <>
      <tr className="group">
        <td className="self-start justify-self-end text-lg text-gray-500">
          <button onClick={() => deleteCart(id)}>
            <RiDeleteBinLine />
          </button>
        </td>
        <td>
          <div className="grid items-center grid-cols-[min-content_1fr] gap-5 text-left">
            <Link to="/hoteldetail">
              <RoomPicture image={file} className="sm" />
            </Link>
            <div>
              <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
                {hotel_name}
              </Link>
              <div className="text-sm flex mt-2 leading-6">
                <b className="font-semibold">예약일</b>
                <div>
                  : {start} ~ {end}
                </div>
              </div>
              <div className="text-sm flex leading-6">
                <b className="font-semibold">인원수</b>
                <div>
                  : 성인 {adult}, 어린이 {children}
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>{type}</td>
        <td className="pr-3 text-right">
          총 <b>{digit3(totalPay)}</b> 원
        </td>
        <td>
          <Link to="/reservation" className="btn-blue">
            결제
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MypageCartItem;

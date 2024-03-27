import React from "react";
import RoomPicture from "../Hotel/RoomPicture";
import { Link, useNavigate } from "react-router-dom";
import room from "../../assets/hotelroom3.jpeg";
import { digit3 } from "../../store/digit3";
import { useReservationStore } from "../../store/reservationStore";

const CartItems = ({ close, items }) => {
  const { adult_count, child_count, check_out, hotel_name, check_in, total_price, cart_id } = items;

  const { deleteCart, addInfo } = useReservationStore();
  const navigate = useNavigate();

  const handleOnClick = () => {
    addInfo(items);
    navigate("/reservation");
    close();
  };

  return (
    <>
      <li className="group grid items-center grid-cols-[min-content_1fr] gap-3 text-left border-b border-b-gray-300 border-dashed py-3">
        <Link to="/hoteldetail">
          <RoomPicture image={room} className="base" />
        </Link>
        <div>
          <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2 font-bold">
            {hotel_name}
          </Link>
          <div className="text-sm flex mt-2 leading-6">
            <b className="font-semibold">예약일</b>
            <div>
              : {check_in} ~ {check_out}
            </div>
          </div>
          <div className="text-sm flex leading-6">
            <b className="font-semibold">인원수</b>
            <div>
              : 성인 {adult_count}, 어린이 {child_count}
            </div>
          </div>
        </div>
        <div className="col-span-2 justify-self-end items-center flex gap-4">
          <div className="text-sm">소계</div>
          <div>
            <b>{digit3(total_price)}</b> 원
          </div>
        </div>
        <div className="col-span-2 justify-self-end flex gap-2">
          <button onClick={handleOnClick} className="btn-blue-outline sm">
            결제
          </button>
          <button className="btn-red-outline sm" onClick={() => deleteCart(cart_id)}>
            삭제
          </button>
        </div>
      </li>
    </>
  );
};

export default CartItems;

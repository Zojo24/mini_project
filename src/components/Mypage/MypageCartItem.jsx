import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import RoomPicture from "../Hotel/RoomPicture";
import { Link, useNavigate } from "react-router-dom";
import { digit3 } from "../../store/digit3";
import { useReservationStore } from "../../store/reservationStore";

const MypageCartItem = ({ items }) => {
  const { adult_count, child_count, check_out, file, hotel_name, check_in, total_price, type, cart_id } = items;
  const { deleteCart, addInfo } = useReservationStore();
  const navigate = useNavigate();

  const handleOnClick = () => {
    addInfo(items);
    navigate("/reservation");
  };

  return (
    <>
      <tr className="group">
        <td className=" mobile:justify-start tablet:justify-self-end text-lg text-gray-500 mobile:col-start-1 mobile:col-end-4 mobile:row-start-1 mobile:row-end-2 mobile:self-center tablet:self-start mobile:p-3 tablet:p-0 ">
          <button onClick={() => deleteCart(cart_id)}>
            <RiDeleteBinLine />
          </button>
        </td>
        <td className="mobile:col-start-1 mobile:col-end-4 mobile:row-start-2 mobile:row-end-3">
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
          </div>
        </td>
        <td className="mobile:justify-self-end mobile:whitespace-nowrap">{type}</td>
        <td className=" mobile:pr-0 tablet:pr-3 text-right whitespace-nowrap">
          총 <b>{digit3(total_price)}</b> 원
        </td>
        <td className="mobile:justify-self-end">
          <button onClick={handleOnClick} className="btn-blue whitespace-nowrap">
            결제
          </button>
        </td>
      </tr>
    </>
  );
};

export default MypageCartItem;

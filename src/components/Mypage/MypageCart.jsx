import React from "react";
import Cart from "../Reservation/Cart";
import Heading from "../Heading";
import RoomPicture from "../Hotel/RoomPicture";
import room from "../../assets/hotelroom3.jpeg";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import HotelPrice from "../Hotel/HotelPrice";
import GuestCounter from "../GuestCounter";

const MypageCart = () => {
  return (
    <>
      <div className="mypage-cart grid grid-cols-[1fr_25rem] gap-10">
        <div className="bg-white rounded-xl  p-10">
          <Heading tag={"h4"} className={"sm"} text={"장바구니"} />
          <table className="mypage-cart__table mt-5">
            <colgroup>
              <col style={{ width: "" }} />
              <col style={{ width: "4rem" }} />
              <col style={{ width: "8rem" }} />
              <col style={{ width: "8rem" }} />
              <col style={{ width: "8rem" }} />
              <col style={{ width: "13rem" }} />
              <col style={{ width: "3rem" }} />
            </colgroup>
            <thead>
              <tr>
                <th>호텔</th>
                <th>룸</th>
                <th>성인</th>
                <th>어린이</th>
                <th>유아</th>
                <th>체크인 / 아웃</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr className="group">
                <td>
                  <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
                    <RoomPicture image={room} />
                    <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
                      호텔명
                    </Link>
                  </div>
                </td>
                <td>디럭스</td>
                <td>
                  <GuestCounter className={"sm"} defaultValue={2} />
                </td>
                <td>
                  <GuestCounter className={"sm"} />
                </td>
                <td>
                  <GuestCounter className={"sm"} />
                </td>
                <td>2024-03-18 ~ 2024-03-19</td>
                <td className="self-start justify-self-end text-lg text-gray-500">
                  <button>
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="!pb-10 text-right">
                  총 <b>1,000,000</b> 원
                </td>
              </tr>
              <tr className="group">
                <td>
                  <div className="grid items-center grid-cols-[min-content_1fr] gap-1 text-left">
                    <RoomPicture image={room} />
                    <Link to="/hoteldetail" className=" group-hover:text-blue-700 line-clamp-2">
                      호텔명은 최대 2줄까지만 들어갑니다람쥐. 호텔명은 최대 2줄까지만 들어갑니다람쥐.
                    </Link>
                  </div>
                </td>
                <td>디럭스</td>
                <td>
                  <GuestCounter className={"sm"} defaultValue={2} />
                </td>
                <td>
                  <GuestCounter className={"sm"} />
                </td>
                <td>
                  <GuestCounter className={"sm"} />
                </td>
                <td>2024-03-18 ~ 2024-03-19</td>
                <td className="self-start justify-self-end text-lg text-gray-500">
                  <button>
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="!pb-10 text-right">
                  총 <b>1,000,000</b> 원
                </td>
              </tr>
              <tr>
                <td colSpan={7} className="!py-10">
                  장바구니가 비어 있습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl p-10 self-start">
          <Heading tag={"h4"} className={"sm"} text={"주문 요약"} />
          <div className="cart-price">
            <ul className="grid gap-2">
              <li>
                <span>보유 금액</span>
                <span>
                  1,000,000 <i className="text-sm">원</i>
                </span>
              </li>
              <li className="font-bold">
                <span>총 결재 금액</span>
                <span className="text-lg">
                  1,000,000 <i className="text-sm">원</i>
                </span>
              </li>
            </ul>
            <div className="grid pt-5">
              <Link to="/reservation" className="btn-blue xl !font-normal">
                결재하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageCart;

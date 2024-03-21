import React from "react";
import "../../styles/components/cart.css";
import ReservationCartItems from "./ReservationCartItems";
import { Link } from "react-router-dom";
import Badge from "../Badge";

const Cart = ({ mypage, close, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCart = () => {
    close();
  };

  return (
    <>
      {!mypage && (
        <header className="border border-b-gray-200 border-solid leading-[4] px-5">
          <h2 className="font-bold">
            장바구니
            <Badge color={"green"}>
              총 <b>2개</b>의 숙소가 등록되었습니다.
            </Badge>
          </h2>
        </header>
      )}
      <form onSubmit={handleSubmit}>
        <ul className="cart__list">
          <ReservationCartItems />
        </ul>
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
          <div className="grid grid-cols-2 gap-3 pt-5">
            <button onClick={handleCart} className="btn-gray !font-normal">
              계속 쇼핑하기
            </button>
            <Link to="/reservation" onClick={handleCart} className="btn-blue !font-normal">
              결재하기
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Cart;

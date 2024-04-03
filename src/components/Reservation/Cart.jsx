import React, { useEffect, useState } from "react";
import "../../styles/components/cart.css";
import CartItems from "./CartItems";
import Badge from "../Badge";
import { useReservationStore } from "../../store/reservationStore";
import { digit3 } from "../../store/digit3";
import request from "../../api/request";
import instance from "../../api/axios";
import { useLoginStore } from "../../store/loginStore";

const Cart = ({ mypage, close, show }) => {
  const token = localStorage.getItem("token");
  const [isCartItmes, setIsCartItmes] = useState([]);
  const { fetchMembersMyCart } = request;
  const { userCredit } = useLoginStore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCart = () => {
    close();
  };
  const cartTotalPrice = digit3(isCartItmes.reduce((acc, curr) => acc + curr.total_price, 0));

  useEffect(() => {
    if (show) {
      const fetchData = async () => {
        try {
          const responseCart = await instance.get(fetchMembersMyCart, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsCartItmes(responseCart.data.result.content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [show]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await instance.patch(`${fetchMembersMyCart}/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const restItems = isCartItmes.filter((item) => item.id !== id);
      setIsCartItmes(restItems);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDelete = (delId) => {
  //   console.log(delId);
  //   const myCartItem = isCartItmes.find((item) => {
  //     item.id === delId;
  //   });
  //   console.log(isCartItmes);
  // };

  return (
    <div className="w-[22rem]">
      {!mypage && (
        <header className="border border-b-gray-200 border-solid leading-[4] px-5">
          <h2 className="font-bold flex gap-1 items-center">
            장바구니
            <Badge color={"green !font-normal"}>
              총 <b>{isCartItmes.length}개</b>의 숙소가 등록되었습니다.
            </Badge>
          </h2>
        </header>
      )}
      <form onSubmit={handleSubmit}>
        <ul className="cart__list">
          {isCartItmes.map((items, index) => (
            <CartItems
              close={handleCart}
              key={index}
              items={items}
              onDelid={handleDelete}
              // onDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
        <div className="cart-price">
          <ul className="grid gap-2">
            <li>
              <span>보유 금액</span>
              <span>
                {digit3(userCredit)} <i className="text-sm">원</i>
              </span>
            </li>
            <li className="font-bold">
              <span>총 결제 금액</span>
              <span className="text-lg">
                {digit3(cartTotalPrice)} <i className="text-sm">원</i>
              </span>
            </li>
          </ul>
          <div className="grid pt-5">
            <button onClick={handleCart} className="btn-gray !font-normal">
              계속 쇼핑하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;

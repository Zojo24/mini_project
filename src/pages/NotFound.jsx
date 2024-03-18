import React from "react";
import page404 from "../assets/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <img src={page404} alt="" className="w-96" />
      <p className="py-10 text-xl">죄송합니다! 이 페이지를 사용할 수 없습니다!</p>
      <Link to="/" className="btn-blue xl">
        첫페이지 바로가기
      </Link>
    </div>
  );
};

export default NotFound;

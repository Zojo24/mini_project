import React from "react";
import Input from "../Input";
import "../../styles/pages/mypage.css";
import Heading from "../Heading";
import Avatar from "../Avatar";

const MypageAccount = () => {
  return (
    <div className="grid grid-cols-[25rem_1fr] gap-5">
      <div className="bg-white rounded-xl whitespace-nowrap p-10 self-start">
        <Heading tag={"h4"} className={"sm"} text={"개인정보"} />
        <Avatar />
        <Avatar add />
        <div>하하하하 님 반갑습니다.</div>
        잔여캐시 : 10,000원
      </div>
      <form className="bg-white rounded-xl  p-10">
        <Heading tag={"h4"} className={"sm"} text={"기본정보"} />
        <div className="grid grid-cols-3 mypage-account mt-5">
          <div>
            이름
            <Input type={"text"} disabled defaultValue="하하하하" />
          </div>
          <div>
            이메일
            <Input type={"email"} disabled defaultValue="123@123.com" />
          </div>
          <div>
            생년월일
            <div className="birth">
              <Input type="number" defaultValue="2018" disabled />년
              <Input type="number" defaultValue="05" disabled />월
              <Input type="number" defaultValue="21" disabled />일
            </div>
          </div>
          <div>
            비밀번호
            <Input type={"password"} defaultValue="123456" />
          </div>
          <div>
            비밀번호 확인
            <Input type={"password"} defaultValue="123456" />
          </div>
        </div>
        <hr className="mt-10" />
        <Heading tag={"h4"} className={"sm mt-10"} text={"상세정보"} />
        <div className="grid grid-cols-2 mypage-account mt-5">
          <div>
            주소
            <Input type={"text"} />
          </div>
          <div>
            도시
            <Input type={"text"} />
          </div>
          <div>
            국가
            <Input type={"text"} />
          </div>
          <div>
            우편번호
            <Input type={"text"} />
          </div>
        </div>
        <div className="text-center pt-10">
          <button className="btn-blue xl">개인정보 수정</button>
        </div>
      </form>
    </div>
  );
};

export default MypageAccount;

import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../Input";
import Select from "../Select";
import Checkbox from "../Checkbox";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "../Dialog";
import ReservationRule from "../ReservationRule";

const ReservationPersonInfo = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("thisisid");
  const [isRule, setIsRule] = useState(false);
  const [isvalue, setIsvalue] = useState("");
  const [isvalue2, setIsvalue2] = useState("");

  const handleInfo = (e) => {
    e.preventDefault();
    navigate(`/reservation/done/${userData}`);
  };

  const handleRule = (e) => {
    e.preventDefault();
    setIsRule(true);
  };
  const handleAddress = (value) => {
    setIsvalue(value);
  };
  const handleCity = (value) => {
    setIsvalue2(value);
  };

  // 결과값
  // console.log("주소" + isvalue);
  // console.log("도시" + isvalue2);
  // console.log("도착시간" + isvalue3);

  return (
    <div>
      <form>
        <Heading tag={"h3"} className={"base"} text={"개인정보 입력"} />
        <div className="reservation-form mt-5">
          <div>
            이름
            <Input type={"text"} disabled defaultValue="아무개" />
          </div>
          <div>
            이메일
            <Input type={"email"} disabled defaultValue="123@123.com" />
          </div>
          <div>
            주소
            <Input type={"text"} value={isvalue} onChange={handleAddress} />
          </div>
          <div>
            도시
            <Input type={"text"} value={isvalue2} onChange={handleCity} />
          </div>
          <div>
            국가
            <Input type={"text"} />
          </div>
          <div>
            우편번호
            <Input type={"text"} />
          </div>
          <div className="col-span-2">
            요청사항
            <Input type={"textarea"} />
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div>
            <Checkbox color={"blue"} id={"agree"} value={"예약 약관동의"} />
          </div>
          <div>
            <button className="btn-blue-outline" onClick={handleRule}>
              약관 보기
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          <button className="btn-blue xl" onClick={handleInfo}>
            숙소 예약하기
          </button>
          <button className="btn-red xl">취소하기</button>
        </div>
      </form>
      <Dialog open={isRule} close={() => setIsRule(false)}>
        <ReservationRule />
      </Dialog>
    </div>
  );
};

export default ReservationPersonInfo;

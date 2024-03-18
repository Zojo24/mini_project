import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../Input";
import Select from "../Select";
import Checkbox from "../Checkbox";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "../Dialog";

const arrivalOption = [
  { value: "select1", text: "잘모르겠습니다." },
  { value: "select2", text: "12:00 - 1:00 am" },
  { value: "select3", text: "1:00 - 2:00 am" },
  { value: "select4", text: "2:00 - 3:00 am" },
  { value: "select5", text: "3:00 - 4:00 am" },
  { value: "select6", text: "4:00 - 5:00 am" },
  { value: "select7", text: "5:00 - 6:00 am" },
  { value: "select8", text: "6:00 - 7:00 am" },
  { value: "select9", text: "7:00 - 8:00 am" },
  { value: "select10", text: "8:00 - 9:00 am" },
  { value: "select11", text: "9:00 - 10:00 am" },
  { value: "select12", text: "10:00 - 11:00 am" },
  { value: "select13", text: "11:00 - 12:00 am" },
  { value: "select14", text: "12:00 - 1:00 pm" },
  { value: "select15", text: "1:00 - 2:00 pm" },
  { value: "select16", text: "2:00 - 3:00 pm" },
  { value: "select17", text: "3:00 - 4:00 pm" },
  { value: "select18", text: "4:00 - 5:00 pm" },
  { value: "select19", text: "5:00 - 6:00 pm" },
  { value: "select20", text: "6:00 - 7:00 pm" },
  { value: "select21", text: "7:00 - 8:00 pm" },
  { value: "select22", text: "8:00 - 9:00 pm" },
  { value: "select23", text: "9:00 - 10:00 pm" },
  { value: "select24", text: "10:00 - 11:00 pm" },
  { value: "select25", text: "11:00 - 12:00 pm" },
];

const ReservationPersonInfo = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("thisisid");
  const [isRule, setIsRule] = useState(false);

  const handleInfo = (e) => {
    e.preventDefault();
    navigate(`/reservation/done/${userData}`);
  };

  const handleRule = (e) => {
    e.preventDefault();
    setIsRule(true);
  };
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
          <div className="col-span-2">
            요청사항
            <Input type={"textarea"} />
          </div>
          <div className="col-span-2">
            예상 도착시간
            <Select options={arrivalOption} />
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
        <Dialog open={isRule} close={() => setIsRule(false)}>
          약관입니다.
        </Dialog>
      </form>
    </div>
  );
};

export default ReservationPersonInfo;

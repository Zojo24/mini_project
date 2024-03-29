import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "../Dialog";
import ReservationRule from "../ReservationRule";
import { useReservationStore } from "../../store/reservationStore";
import Loading from "../Loading";
import { useLoginStore } from "../../store/loginStore";
import Loading2 from "../Loading2";
import request from "../../api/request";
import instance from "../../api/axios";

const ReservationPersonInfo = ({ userInfo }) => {
  const navigate = useNavigate();
  const { deleteCart } = useReservationStore();
  const { userName, userCredit, userId, userEmail, address, city, nation, zip_code, profile_image } = useLoginStore();
  const { role, total_price, cart_id } = userInfo;
  const token = localStorage.getItem("token");
  const { fetchOrders } = request; // 필요한 요청 URL을 추출

  const [isuserInfo, setUserInfo] = useState(userInfo);
  const [isRule, setIsRule] = useState(false);
  const [isAddress, setIsAddress] = useState(address);
  const [isCountry, setIsCountry] = useState(nation);
  const [isCity, setIsCity] = useState(city);
  const [isPostCode, setIsPostCode] = useState(zip_code);
  const [isRequestText, setIsRequestText] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [errrorMessage, setErrrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [persnalInfo, setPersnalInfo] = useState({
    name: userName,
    email: userEmail,
    address: address,
    city: city,
    nation: nation,
    zip_code: zip_code,
    comment: "",
    agreement: false,
    credit: userCredit,
  });
  const handleAddress = (address) => {
    setIsAddress(address);
    setPersnalInfo({ ...persnalInfo, address });
  };
  const handleCity = (city) => {
    setIsCity(city);
    setPersnalInfo({ ...persnalInfo, city });
  };
  const handleCountry = (nation) => {
    setIsCountry(nation);
    setPersnalInfo({ ...persnalInfo, nation });
  };
  const handlePostCode = (zip_code) => {
    setIsPostCode(zip_code);
    setPersnalInfo({ ...persnalInfo, zip_code });
  };
  const handleRequest = (comment) => {
    setIsRequestText(comment);
    setPersnalInfo({ ...persnalInfo, comment });
  };
  const handleRule = (e) => {
    e.preventDefault();
    setIsRule(true);
  };

  useEffect(() => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      address: isAddress,
      city: isCity,
      nation: isCountry,
      zip_code: isPostCode,
    }));
  }, [isAddress, isCity, isCountry, isPostCode]);

  const handleReservation = async (e) => {
    e.preventDefault();

    const checkEmpty = () => {
      let isValid = true;
      if (!persnalInfo.address) {
        setIsPopup(true);
        setErrrorMessage("주소를 입력해 주세요.");
        isValid = false;
      } else if (!persnalInfo.city) {
        setIsPopup(true);
        setErrrorMessage("도시를 입력해 주세요.");
        isValid = false;
      } else if (!persnalInfo.nation) {
        setIsPopup(true);
        setErrrorMessage("국가를 입력해 주세요.");
        isValid = false;
      } else if (!persnalInfo.zip_code) {
        setIsPopup(true);
        setErrrorMessage("우편번호를 입력해 주세요.");
        isValid = false;
      } else if (userCredit < total_price) {
        setIsPopup(true);
        setErrrorMessage("보유금액이 결제금액보다 적습니다. 크래딧을 충전해주세요.");
        isValid = false;
      } else if (!persnalInfo.agreement) {
        setIsPopup(true);
        setErrrorMessage("예약 약관에 동의해주세요.");
        isValid = false;
      }
      return isValid;
    };

    const isValidCheck = checkEmpty();

    if (!isValidCheck) return;

    const requestData = {
      id: userInfo[0].id,
      member_id: userInfo[0].member_id,
      room_id: userInfo[0].room_id,
      check_in: userInfo[0].check_in,
      check_out: userInfo[0].check_out,
      adult_count: userInfo[0].adult_count,
      child_count: userInfo[0].child_count,
      total_price: userInfo[0].total_price,
      zip_code: persnalInfo.zip_code,
      address: persnalInfo.address,
      city: persnalInfo.city,
      nation: persnalInfo.nation,
      name: persnalInfo.name,
    };
    // const requestOrder = {
    //   room_id: userInfo[0].room_id,
    //   check_in: userInfo[0].check_in,
    //   check_out: userInfo[0].check_out,
    //   adult_count: userInfo[0].adult_count,
    //   child_count: userInfo[0].child_count,
    //   total_price: userInfo[0].total_price,
    // };
    // const requestPersonal = {
    //   zip_code: persnalInfo.zip_code,
    //   address: persnalInfo.address,
    //   city: persnalInfo.city,
    //   nation: persnalInfo.nation,
    //   comment: persnalInfo.comment,
    // };
    // console.log(requestData);
    try {
      setIsLoading2(true);
      const responseOrder = await instance.post(`${fetchOrders}/${userId}`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = responseOrder.data;
      console.log(responseData);

      // const responseOrder = await instance.post(fetchOrders, requestOrder, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // const dataOrder = responseOrder.data;

      // const responsePersonal = await instance.patch(`${fetchOrders}/${userId}`, requestPersonal, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // const dataPersonal = responsePersonal.data;

      // console.log("예약내역", dataOrder, "정보내역", dataPersonal);

      // addAdditionalInfo({ ...persnalInfo, userInfo }); // 전체예약내역 상태저장

      deleteCart(cart_id);
    } catch (error) {
      console.log("handleReservation", error);
    } finally {
      setIsLoading2(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(`/reservation/done/${userId}`);
      }, 1500);
    }
  };

  return (
    <div className="relative">
      <form>
        <Heading tag={"h3"} className={"base"} text={"개인정보 입력"} />
        <div className="reservation-form mt-5">
          <div>
            이름
            <Input type={"text"} disabled defaultValue={userName} />
          </div>
          <div>
            이메일
            <Input type={"email"} disabled defaultValue={userEmail} />
          </div>
          <div>
            주소
            <Input type={"text"} value={isAddress} onChange={handleAddress} />
          </div>
          <div>
            도시
            <Input type={"text"} value={isCity} onChange={handleCity} />
          </div>
          <div>
            국가
            <Input type={"text"} value={isCountry} onChange={handleCountry} />
          </div>
          <div>
            우편번호
            <Input type={"text"} value={isPostCode} onChange={handlePostCode} />
          </div>
          <div className="col-span-2">
            요청사항
            <Input type={"textarea"} value={isRequestText} onChange={handleRequest} />
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="check-group">
            <Checkbox
              color={"blue"}
              id={"agree"}
              checked={persnalInfo.agreement}
              onChange={(e) => setPersnalInfo({ ...persnalInfo, agreement: e.target.checked })}
            >
              예약 약관동의
            </Checkbox>
          </div>
          <div>
            <button className="btn-blue-outline" onClick={handleRule}>
              약관 보기
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-2 justify-center">
          <button className="btn-blue xl" onClick={handleReservation}>
            숙소 예약하기
          </button>
          <Link to="/" className="btn-red xl">
            취소하기
          </Link>
        </div>
      </form>
      <Dialog open={isRule} close={() => setIsRule(false)}>
        <ReservationRule />
      </Dialog>
      <Dialog open={isPopup} close={() => setIsPopup(false)}>
        <div className="text-center">
          <div className="text-center pb-3">{errrorMessage}</div>
          <button className="btn-blue" onClick={() => setIsPopup(false)}>
            확인
          </button>
        </div>
      </Dialog>
      {isLoading && <Loading />}
      {isLoading2 && <Loading2 />}
    </div>
  );
};

export default ReservationPersonInfo;

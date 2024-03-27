import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dialog from "../Dialog";
import ReservationRule from "../ReservationRule";
import { useReservationStore } from "../../store/reservationStore";
import Loading from "../Loading";

const ReservationPersonInfo = ({ userInfo }) => {
  const navigate = useNavigate();
  const { addAdditionalInfo, totalInfos, paymentInfos, deleteCart } = useReservationStore();
  const { role, credit, profile_image, name, email, address, city, nation, zip_code } = userInfo;
  const { cart_id } = paymentInfos[0];

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
  const [persnalInfo, setPersnalInfo] = useState({
    name: name,
    email: email,
    address: address,
    city: city,
    nation: nation,
    zip_code: zip_code,
    text: "",
    agreement: false,
    credit: credit,
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
  const handleRequest = (text) => {
    setIsRequestText(text);
    setPersnalInfo({ ...persnalInfo, text });
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
    }
    return isValid;
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const checkedInfo = [];
    document.querySelectorAll('.check-group input[type="checkbox"]:checked').forEach((checkbox) => {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);
      if (label) {
        checkedInfo.push({
          id: checkbox.id,
          checked: checkbox.checked,
          label: label.textContent.trim(),
        });
      }
    });

    if (checkedInfo.length > 0) {
      const agreement = checkedInfo[0].checked;
      const isValidCheck = checkEmpty();

      if (isValidCheck) {
        const updatedPersonalInfo = { ...persnalInfo, agreement }; // 업데이트된 상태를 먼저 생성
        setPersnalInfo(updatedPersonalInfo);
        addAdditionalInfo({ ...persnalInfo, paymentInfos });
        deleteCart(cart_id);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate(`/reservation/done/my-id`);
        }, 1500);
      }
    } else {
      setIsPopup(true);
      setErrrorMessage("예약 약관에 동의해주세요.");
    }
  };

  return (
    <div>
      <form>
        <Heading tag={"h3"} className={"base"} text={"개인정보 입력"} />
        <div className="reservation-form mt-5">
          <div>
            이름
            <Input type={"text"} disabled defaultValue={userInfo.name} />
          </div>
          <div>
            이메일
            <Input type={"email"} disabled defaultValue={userInfo.email} />
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
            <Checkbox color={"blue"} id={"agree"}>
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
    </div>
  );
};

export default ReservationPersonInfo;

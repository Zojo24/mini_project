import React, { useState, useEffect } from "react";
import Input from "../Input";
import "../../styles/pages/mypage.css";
import Heading from "../Heading";
import Avatar from "../Avatar";
import { useRegisterStore } from "../../store/RegisterStore";

const MypageAccount = () => {
  const { user } = useRegisterStore((state) => state);
  const { name, email, birth, password } = user;
  const birthYear = birth.slice(0, 4);
  const birthMonth = birth.slice(4, 6);
  const birthDay = birth.slice(6, 8);

  const { setUser } = useRegisterStore();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [nation, setNation] = useState("");

  useEffect(() => {
    const storedAddress = localStorage.getItem("address");
    const storedCity = localStorage.getItem("city");
    const storedZipCode = localStorage.getItem("zip_code");
    const storedNation = localStorage.getItem("nation");

    if (storedAddress) setAddress(storedAddress);
    if (storedCity) setCity(storedCity);
    if (storedZipCode) setZipCode(storedZipCode);
    if (storedNation) setNation(storedNation);
  }, []);

  const handleAddress = (value) => {
    setAddress(value);
  };
  const handleCity = (value) => {
    setCity(value);
  };
  const handleZipCode = (value) => {
    setZipCode(value);
  };
  const handleNation = (value) => {
    setNation(value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      address,
      city,
      zip_code: zipCode,
      nation,
    };
    setUser(updatedUser);

    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("zip_code", zipCode);
    localStorage.setItem("nation", nation);
  };
  return (
    <div className="grid mobile:grid-cols-1 tablet:grid-cols-[20rem_1fr] gap-5">
      <div className="bg-white rounded-xl whitespace-nowrap p-10 self-start text-center">
        <Heading tag={"h4"} className={"sm mb-5"} text={"개인정보"} />
        {/* <Avatar /> */}
        <Avatar add />
        <div className="mb-5 mt-1">
          <b>{name}</b>님
          <br /> 반갑습니다.
        </div>
        잔여캐시
        <br />
        <strong className="text-2xl mr-1 text-blue-700 tracking-tight">1,000,000</strong>
        <span>원</span>
      </div>
      <form type="onSubmit" className="bg-white rounded-xl  p-10">
        <Heading tag={"h4"} className={"sm"} text={"기본정보"} />
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 mypage-account mt-5">
          <div>
            이름
            <Input type={"text"} disabled defaultValue={name} />
          </div>
          <div>
            이메일
            <Input type={"email"} disabled defaultValue={email} />
          </div>
          <div>
            생년월일
            <div className="birth">
              <Input type="number" defaultValue={birthYear} disabled />년
              <Input type="number" defaultValue={birthMonth} disabled />월
              <Input type="number" defaultValue={birthDay} disabled />일
            </div>
          </div>
          <div>
            비밀번호
            <Input type={"password"} defaultValue={password} />
          </div>
          <div>
            비밀번호 확인
            <Input type={"password"} defaultValue={password} />
          </div>
        </div>
        <hr className="mt-10" />
        <Heading tag={"h4"} className={"sm mt-10"} text={"상세정보"} />
        <div className="grid grid-cols-2 mypage-account mt-5">
          <div>
            주소
            <Input type={"text"} value={address} onChange={handleAddress} />
          </div>
          <div>
            도시
            <Input type={"text"} value={city} onChange={handleCity} />
          </div>
          <div>
            국가
            <Input type={"text"} value={nation} onChange={handleNation} />
          </div>
          <div>
            우편번호
            <Input type={"text"} value={zipCode} onChange={handleZipCode} />
          </div>
        </div>
        <div className="text-center pt-10">
          <button className="btn-blue xl" onClick={handleChange}>
            개인정보 수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default MypageAccount;

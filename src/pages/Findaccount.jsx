import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Box from "../components/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const FindAccount = () => {
  const [email, setEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetToast, setResetToast] = useState("");
  const navigate = useNavigate();

  const handleResetEmail = (value) => {
    setEmail(value);
  };

  const handleResetForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api", {
        email,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          default:
            setResetError("예기치 않은 오류가 발생했습니다.");
        }
      } else {
        setResetError(
          "서버에 접속할 수 없습니다. 네트워크 상태를 확인해 주세요."
        );
      }
      setResetToast(true);
      console.log("Reset failed", error);
    }
  };
  return (
    <div className="main bg-gray-100 min-h-[auto]">
      <div className="container py-28">
        <Box className={"white w-[35rem] mx-auto"}>
          <Heading tag={"h2"} className={"xl"} text={"비밀번호 초기화"} />
          <form onSubmit={handleResetForm}>
            <label htmlFor="email">이메일입력</label>
            <div className="text-center pt-2 pb-10">
              <Input
                type={"email"}
                className={"w-full"}
                value={email}
                onChange={handleResetEmail}
              />
            </div>
            <div className="flex justify-center gap-2">
              <button type="submit" className="btn-blue xl w-full">
                새 비밀번호 생성
              </button>
            </div>
          </form>
        </Box>
      </div>
      <Toast
        color={"red"}
        onOpen={resetToast}
        onClose={() => setResetToast(false)}
      >
        {resetError}
      </Toast>
    </div>
  );
};

export default FindAccount;

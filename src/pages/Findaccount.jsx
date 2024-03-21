import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Box from "../components/Box";

const Findaccount = () => {
  return (
    <div className="main bg-gray-100 min-h-[auto]">
      <div className="container py-28">
        <Box className={"white w-[35rem] mx-auto"}>
          <Heading tag={"h2"} className={"xl"} text={"비밀번호 초기화"} />
          이메일입력
          <div className="text-center pt-2 pb-10">
            <Input type={"email"} className={"w-full"} />
          </div>
          <div className="flex justify-center gap-2">
            <Link to="/" className="btn-blue xl w-full">
              새 비밀번호 생성
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Findaccount;

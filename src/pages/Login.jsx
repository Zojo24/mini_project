import React, { useState } from "react";
import Dialog from "../components/Dialog";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/login.css";

const Login = ({ close, ...props }) => {
  const [isTab, setIsTab] = useState("login");
  const navigate = useNavigate();

  const handleTab = (tab) => {
    setIsTab(tab);
  };

  const handleCart = () => {
    close();
    navigate("/findaccount");
  };

  return (
    <>
      <nav>
        <ul className="tab">
          <li>
            <button className={isTab === "login" ? "--active" : ""} onClick={() => handleTab("login")}>
              Login
            </button>
          </li>
          <li>
            <button className={isTab === "register" ? "--active" : ""} onClick={() => handleTab("register")}>
              Register
            </button>
          </li>
        </ul>
      </nav>
      {isTab === "login" && (
        <>
          <form className="login-form">
            <div>
              이메일
              <Input type="email" required />
            </div>
            <div>
              비밀번호
              <Input type="password" required />
            </div>
            <button className="btn-blue xl2">Sign In</button>
          </form>
          <div className="btn-login">
            <button to="/findaccount" onClick={handleCart}>
              비밀번호를 잊으셨나요?
            </button>
          </div>
        </>
      )}
      {isTab === "register" && (
        <form className="login-form">
          <div>
            이름
            <Input type="text" required />
          </div>
          <div>
            이메일
            <Input type="email" required />
          </div>
          <div>
            생년월일
            <div className="birth">
              <Input type="number" placeholder="YYYY" required />년
              <Input type="number" placeholder="MM" required />월
              <Input type="number" placeholder="DD" required />일
            </div>
          </div>
          <div>
            비밀번호
            <Input type="password" required />
          </div>
          <div>
            비밀번호 확인
            <Input type="password" required />
          </div>
          <button className="btn-blue xl2">Sign Up</button>
        </form>
      )}
    </>
  );
};

export default Login;

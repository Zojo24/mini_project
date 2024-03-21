import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import "../styles/pages/login.css";
import axios from "axios";
import { useLoginStore } from "../store/loginStore";
import Toast from "../components/Toast";

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

  const setLogin = useLoginStore((state) => state.setLogin);
  const setRegister = useRegisterStore((state) => state.setRegister);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [loginToast, setLoginToast] = useState(false);
  const [registerToast, setRegisterToast] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [birthYear, setbirthYear] = useState("");
  const [birthMonth, setbirthMonth] = useState("");
  const [birthDay, setbirthDay] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/members/login", {
        email,
        password,
      });

      //header jwt 토큰 정보 받아오기
      //TODO: 추후 헤더 이름 확인 필요
      let jwtToken = response.headers["Authorization"];

      if (response.data.success && jwtToken) {
        localStorage.setItem("token", jwtToken);
        setLogin(true);
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setLoginError(
              "이메일 혹은 비밀번호가 정확하지 않습니다. 다시 입력해 주세요."
            );
            break;
          default:
            setLoginError("로그인 중 예기치 않은 오류가 발생했습니다.");
        }
      } else {
        setLoginError(
          "서버에 접속할 수 없습니다. 네트워크 상태를 확인해 주세요."
        );
      }
      setLoginToast(true);
      console.log("Login failed", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegisterError("비밀번호가 일치하지 않습니다.");
      setRegisterToast(true);
      return;
    }

    const requestData = {
      name,
      email,
      dateOfBirth: `${birthYear}/${birthMonth}/${birthDay}`,
      password,
    };
    try {
      const response = await axios.post("/api/register", requestData);
      navigate("/");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          default:
            setRegisterError("회원가입 중 예기치 않은 오류가 발생했습니다.");
        }
      } else {
        setRegisterError(
          "서버에 접속할 수 없습니다. 네트워크 상태를 확인해 주세요."
        );
      }
    }
  };
  return (
    <>
      <nav>
        <ul className="tab">
          <li>
            <button
              className={isTab === "login" ? "--active" : ""}
              onClick={() => handleTab("login")}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className={isTab === "register" ? "--active" : ""}
              onClick={() => handleTab("register")}
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
      {isTab === "login" && (
        <>
          <form className="login-form" onSubmit={handleLogin}>
            <div>
              이메일
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              비밀번호
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn-blue xl2">
              Sign In
            </button>
          </form>
          <div className="btn-login">
            <button to="/findaccount" onClick={handleCart}>
              비밀번호를 잊으셨나요?
            </button>
          </div>
          <Toast
            color={"red"}
            onOpen={loginToast}
            onClose={() => setLoginToast(false)}
          >
            {loginError}
          </Toast>
        </>
      )}
      {isTab === "register" && (
        <>
          <form className="login-form" onSubmit={handleRegister}>
            <div>
              이름
              <Input type="name" required />
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
            <button type="submit" className="btn-blue xl2">
              Sign Up
            </button>
          </form>
          <Toast
            color={"red"}
            onOpen={registerToast}
            onClose={() => setRegisterToast(false)}
          >
            {loginError}
          </Toast>
        </>
      )}
    </>
  );
};

export default Login;

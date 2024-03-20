import React, { useState } from "react";
import Dialog from "../components/Dialog";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import "../styles/pages/login.css";
import axios from "axios";
import { useLoginStore } from "../store/loginStore";

const Login = ({ ...props }) => {
  const [isTab, setIsTab] = useState("login");

  const handleTab = (tab) => {
    setIsTab(tab);
  };

  const { setLogin } = useLoginStore((state) => state.setLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/members/login", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.success) {
        setLogin(true);
      }
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <>
      <Dialog {...props}>
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
                  value="email"
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
                  value="password"
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
              <Link to="/">비밀번호를 잊으셨나요?</Link>
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
      </Dialog>
    </>
  );
};

export default Login;

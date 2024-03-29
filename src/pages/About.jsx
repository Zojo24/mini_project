import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useVisualStore } from "../store/visualStore";
// import subvisual from "../assets/subvisual1.jpg";
import MemberItems from "../components/MemberItems";
import { membersData } from "../store/member";

const About = () => {
  const { setTitle } = useVisualStore();

  useEffect(() => {
    setTitle("About Us");
  }, [setTitle]);

  // 함수는 로컬 스토리지에 저장된 "token"을 검사하여 사용자의 로그인 상태를 boolean 값으로 반환합니다.
  // const isLoggedIn = () => {
  //   const token = localStorage.getItem("token");
  //   return !!token;
  // };

  // const About = () => {
  //   const navigate = useNavigate();
  //   const [isPopup, setIsPopup] = useState(false);

  //   useEffect(() => {
  //     if (!isLoggedIn()) {
  //       setIsPopup(true);
  //     }
  //   }, []);

  //   // 확인 버튼을 클릭하면 메인 페이지로 리다이렉트
  //   const handleConfirm = () => {
  //     setIsPopup(false);
  //     navigate("/");
  //   };

  //   const handleCancel = () => {
  //     setIsPopup(false);
  //     navigate("/");
  //   };

  return (
    <>
      <div className="main">
        {/* <Dialog open={isPopup} close={handleCancel}>
        로그인이 필요합니다.
        <div className="flex justify-center gap-2 mt-5">
          <button className="btn-blue" onClick={handleConfirm}>
            확인
          </button>
          <button className="btn-gray" onClick={handleCancel}>
            취소
          </button>
        </div>
      </Dialog> */}
        <div className="container my-10">
          <Heading tag={"h3"} text={"Project Member"} className={"xl"} />
          <ul className="grid mobile:grid-cols-1 tablet:grid-cols-4 gap-10">
            {membersData.map((member, index) => (
              <MemberItems key={index} member={member} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

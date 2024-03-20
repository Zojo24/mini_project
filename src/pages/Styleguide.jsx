import { useEffect, useState } from "react";
import { useVisualStore } from "../store/visualStore";
import Heading from "../components/Heading";
import Text from "../components/Text";
import { RiContrast2Line } from "react-icons/ri";
import Badge from "../components/Badge";
import Toast from "../components/Toast";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import Dialog from "../components/Dialog";
import Loading from "../components/Loading";
import Avatar from "../components/Avatar";
import GuestCounter from "../components/GuestCounter";
import HotelFavorite from "../components/Hotel/HotelFavorite";
import HotelLocation from "../components/Hotel/HotelLocation";
import HotelPrice from "../components/Hotel/HotelPrice";
import Noimage from "../components/Noimage";
import img from "../assets/hotel1.jpg";
import Box from "../components/Box";
import Radio from "../components/Radio";

const select = [
  {
    value: "select1",
    text: "선택하세요",
  },
  {
    value: "select2",
    text: "선택하세요2",
  },
];

const Styleguide = () => {
  const { setTitle } = useVisualStore();
  const [isToast, setIsToast] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRadio, setIsRadio] = useState(false);

  const handleChange = () => {
    setIsRadio(!isRadio);
  };

  useEffect(() => {
    setTitle("Style Guide");
  }, [setTitle]);

  const handleToast = () => {
    setIsToast(true);
  };
  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const showLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="main pb-20">
        <div className="container">
          {/* 제목 테스트 */}
          <Heading tag={"h2"} className={"xl"} text={"Heading & Text"} />
          <Heading tag={"h3"} className={"base"} text={"h3 base"} />
          <Heading tag={"h4"} className={"sm"} text={"h4 sm"} />
          <Heading tag={"h5"} className={"xs"} text={"h5 xs"} />
          <Text type={"1"}>Text type1</Text>

          {/* 버튼 */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Buttons"} />
          <div className="grid gap-5 grid-cols-2">
            <div className="flex gap-4 flex-wrap">
              <button className="btn-blue">btn-blue</button>
              <button className="btn-blue-label">btn-blue-label</button>
              <button className="btn-blue-outline">btn-blue-outline</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="btn-red">btn-red</button>
              <button className="btn-red-label">btn-red-label</button>
              <button className="btn-red-outline">btn-red-outline</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="btn-gray">btn-gray</button>
              <button className="btn-gray-label">btn-gray-label</button>
              <button className="btn-gray-outline">btn-gray-outline</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="btn-green">btn-green</button>
              <button className="btn-green-label">btn-green-label</button>
              <button className="btn-green-outline">btn-green-outline</button>
            </div>
            <div className="flex gap-4 flex-wrap items-center col-span-2">
              <button className="btn-blue">btn-blue</button>
              <button className="btn-blue xl">btn-blue xl</button>
              <button className="btn-blue xl2">btn-blue xl2</button>
            </div>
            <div className="flex gap-4 flex-wrap items-center col-span-2">
              <button className="btn-lightgray-circle">
                <RiContrast2Line />
              </button>
              btn-lightgray-circle
            </div>
          </div>

          {/* 뱃지 */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Badges"} />
          <div className="flex gap-3 flex-wrap">
            <Badge color={"blue"}>blue</Badge>
            <Badge color={"red"}>red</Badge>
            <Badge color={"gray"}>gray</Badge>
            <Badge color={"green"}>green</Badge>
            <Badge color={"mint"}>mint</Badge>
          </div>

          {/* 토스트팝업 */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Toast"} />
          <div className="text-center">
            <button className="btn-blue-outline" onClick={handleToast}>
              토스트보기
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Toast onOpen={isToast} onClose={() => setIsToast(!isToast)} color={"blue"}>
              회원가입이 완료 되었습니다.
            </Toast>
            {/* 토스트 : 아래의 코드는 디자인 예시입니다. 위의 코드를 사용하세요. */}

            <Toast
              style={{
                display: "inline-flex",
                position: "static",
                transform: "none",
                opacity: "1",
                animation: "none",
              }}
              color={"blue"}
            >
              blue
            </Toast>
            <Toast
              style={{
                display: "inline-flex",
                position: "static",
                transform: "none",
                opacity: "1",
                animation: "none",
              }}
              color={"red"}
            >
              red
            </Toast>
            <Toast
              style={{
                display: "inline-flex",
                position: "static",
                transform: "none",
                opacity: "1",
                animation: "none",
              }}
              color={"gray"}
            >
              gray
            </Toast>
            <Toast
              style={{
                display: "inline-flex",
                position: "static",
                transform: "none",
                opacity: "1",
                animation: "none",
              }}
              color={"green"}
            >
              green
            </Toast>
            <Toast
              style={{
                display: "inline-flex",
                position: "static",
                transform: "none",
                opacity: "1",
                animation: "none",
              }}
              color={"mint"}
            >
              mint
            </Toast>
          </div>

          {/* Form */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Form"} />
          <div className="grid gap-2 grid-cols-5">
            <Input type="text" defaultValue="text" />
            <Input type="password" defaultValue="password" />
            <Input type="email" defaultValue="email" />
            <Input type="search" defaultValue="search" />
            <Input type="date" defaultValue="2024-03-17" />
            <Input type={"text"} price={true} placeholder="3자리마다 쉼표 숫자" />
            <Select options={select} />
            <Input type="file" />
          </div>
          <div className="grid mt-5">
            <Input type="textarea" />
          </div>
          <ul className="flex gap-4 mt-5">
            <li>
              <Checkbox color={"blue"} id={"check2_1"} value={"checkbox"} />
            </li>
            <li>
              <Checkbox id="check2_2" color={"blue"} checked={true} value={"checkbox"} />
            </li>
            <li>
              <Checkbox id="check2_4" color={"blue"} checked={true} disabled value={"disabled"} />
            </li>
            <li>
              <Checkbox id="check2_3" color={"blue"} disabled value={"disabled"} />
            </li>
          </ul>
          <ul className="flex gap-4 mt-5">
            <li>
              <Checkbox color={"blue"} id={"check3_1"} checked={true} value={"checkbox"} />
            </li>
            <li>
              <Checkbox color={"red"} id={"check3_2"} checked={true} value={"checkbox"} />
            </li>
            <li>
              <Checkbox color={"gray"} id={"check3_3"} checked={true} value={"checkbox"} />
            </li>
          </ul>
          <ul className="flex gap-4 mt-5">
            <li>
              <Radio
                color={"blue"}
                checked={!isRadio}
                value={"checked"}
                id={"hotel_reser1"}
                name={"rag1"}
                onChange={handleChange}
              />
              <Radio
                color={"blue"}
                value={"unchecked"}
                id={"hotel_reser2"}
                name={"rag1"}
                onChange={handleChange}
              />
            </li>
          </ul>
          <div className="flex gap-2 pt-5">
            <GuestCounter />
            <GuestCounter className={"sm"} />
            <GuestCounter className={"sm"} defaultValue={2} />
          </div>

          {/* 기타UI */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Popup"} />
          <div className="text-center flex gap-3 justify-center">
            <button className="btn-blue-outline" onClick={handlePopup}>
              팝업열기
            </button>
            <Dialog open={isPopup} close={() => setIsPopup(false)}>
              팝업내용
              <div className="flex justify-center gap-2 mt-5">
                <button className="btn-blue">확인</button>
                <button className="btn-gray" onClick={() => setIsPopup(false)}>
                  취소
                </button>
              </div>
            </Dialog>
            <button className="btn-blue-outline" onClick={showLoading}>
              로딩
            </button>
            {isLoading && <Loading />}
          </div>

          {/* 기타등등 */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Etc"} />
          <div className="flex gap-5 items-center mb-5">
            <Avatar />
            <Avatar add={true} />
            <HotelFavorite />
            <HotelFavorite checked={true} />
            <HotelPrice price={"5,000"} />
            <HotelLocation location={"위치입력"} />
            <HotelLocation location={"위치입력"} className={"xl"} />
            <Noimage props={{ image: "" }} />
            <Noimage props={{ image: img }} />
          </div>
          <Box>
            회색박스
            <Box className={"white"}>흰색박스</Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Styleguide;

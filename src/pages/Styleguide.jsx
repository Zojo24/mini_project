import {
  useEffect,
  useState,
} from 'react';

import { RiContrast2Line } from 'react-icons/ri';

import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Box from '../components/Box';
import Checkbox from '../components/Checkbox';
import Dialog from '../components/Dialog';
import GuestCounter from '../components/GuestCounter';
import Details from '../components/Guide/Details';
import Heading from '../components/Heading';
import HotelFavorite from '../components/Hotel/HotelFavorite';
import HotelLocation from '../components/Hotel/HotelLocation';
import HotelPrice from '../components/Hotel/HotelPrice';
import Input from '../components/Input';
import Loading from '../components/Loading';
import Loading2 from '../components/Loading2';
import Radio from '../components/Radio';
import Select from '../components/Select';
import Text from '../components/Text';
import Toast from '../components/Toast';
import { codes } from '../store/codeStore';
import { useVisualStore } from '../store/visualStore';

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
  const [isLoading2, setIsLoading2] = useState(false);
  const [isRadio, setIsRadio] = useState("남자");
  const [isCheckbox, setIsCheckbox] = useState([]);

  const handleChange = (e) => {
    setIsRadio(e);
  };
  const handleRadio = (e) => {
    e.preventDefault();
    console.log(isRadio);
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
  const showLoading2 = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
    }, 3000);
  };
  const handleSubmitCheckbox = (e) => {
    e.preventDefault();
    const checkedTexts = [];
    document
      .querySelectorAll('.check-group input[type="checkbox"]:checked')
      .forEach((checkbox) => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
          checkedTexts.push({
            id: checkbox.id,
            checked: checkbox.checked,
            label: label.textContent.trim(),
          });
        }
      });
    setIsCheckbox(checkedTexts);
    console.log(checkedTexts);
  };
  const handleGuest = (value) => {
    console.log(value);
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
          <Details title={"Code View"}>{codes[0].code}</Details>
          <ul className="guide-list">
            <li>
              <b>tag</b> : 원하는 태그명을 넣어야 합니다.
            </li>
            <li>
              <b>className</b> : 크기를 정의합니다. (xs, sm, base, xl)
            </li>
            <li>
              <b>text</b> : 제목에 들어갈 텍스트를 삽입합니다.
            </li>
          </ul>
          <hr className="guide-line" />
          <Text type={"1"}>Text type1</Text>
          <Details title={"Code View"}>{codes[1].code}</Details>
          <ul className="guide-list">
            <li>children을 포함하고 있어 닫힘 컴퍼넌트가 필요합니다.</li>
            <li>
              <b>type</b> : 첫번째 디자인
            </li>
          </ul>

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
            <div className="col-span-2">
              <Details title={"Code View"}>{codes[2].code}</Details>
              <ul className="guide-list">
                <li>button, a 태그, Link 컴퍼넌트 모두 가능합니다.</li>
                <li>닫힘태그가 반드시 존재해야 합니다.</li>
                <li>
                  <b>btn-색상명</b> : gray, blue, green, red
                </li>
                <li>
                  <b>btn-색상명-형태</b> : label, outline
                </li>
              </ul>
              <hr className="guide-line" />
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
          <Details title={"Code View"}>{codes[3].code}</Details>
          <ul className="guide-list">
            <li>
              <b>color</b> : gray, blue, green, red, mint
            </li>
          </ul>
          <hr className="guide-line" />

          {/* 토스트팝업 */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Toast"} />
          <div className="text-center">
            <button className="btn-blue-outline" onClick={handleToast}>
              토스트보기
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Toast
              onOpen={isToast}
              onClose={() => setIsToast(!isToast)}
              color={"blue"}
            >
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
          <Details title={"Code View"} lang="javascript">
            {codes[4].code}
          </Details>
          <ul className="guide-list">
            <li>
              <b>color</b> : gray, blue, green, red, mint
            </li>
            <li>
              <b>onOpen</b> : 열기 함수로 상태저장 변수를 blooan 값으로
              지정합니다.
            </li>
            <li>
              <b>onClose</b> : 닫기 함수로 false값을 전달합니다.
            </li>
            <li>
              특정 상황에 true값이 전달되고, 해당 조건에 따라 Toast를
              노출합니다. 애니메이션은 자동 실행됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          {/* Form */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Form"} />
          <div className="grid gap-2 grid-cols-5">
            <Input
              type="text"
              defaultValue="text"
              onChange={(value) => console.log(value)}
            />
            <Input type="password" defaultValue="password" />
            <Input type="email" defaultValue="email" />
            <Input type="search" defaultValue="search" />
          </div>
          <Details title={"Code View"} lang="xml">
            {codes[5].code}
          </Details>
          <ul className="guide-list">
            <li>
              <b>type</b> : date, file, textarea을 제외한 나머지 속성을
              지정합니다.
            </li>
            <li>
              <b>defaultValue</b> : 초기 입력값을 설정합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <div className="grid gap-2 grid-cols-5">
            <Input type="date" defaultValue="2024-03-17" />
          </div>
          <Details title={"Code View"} lang="xml">
            {codes[6].code}
          </Details>
          <ul className="guide-list">
            <li>t반드시 type을 date로 정의해야합니다.</li>
            <li>
              <b>min</b> : 특정 날짜 이하로 선택하지 못하게 합니다.
            </li>
            <li>
              <b>value</b> : 임의 날짜를 지정합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <div className="grid gap-2 grid-cols-5">
            <Input
              type={"text"}
              price={true}
              placeholder="3자리마다 쉼표 숫자"
              onChange={(e) => console.log(e)}
            />
          </div>
          <Details title={"Code View"} lang="xml">
            {codes[7].code}
          </Details>
          <ul className="guide-list">
            <li>가격을 정의합니다.</li>
            <li>
              <b>type</b> : 반드시 type을 text로 정의해야합니다.
            </li>
            <li>
              <b>price</b> : 가격을 정의하기 위해 true값으로 합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <div className="grid gap-2 grid-cols-5">
            <Select
              options={select}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <Details title={"Code View"} lang="javascript">
            {codes[8].code}
          </Details>
          <ul className="guide-list">
            <li>
              <b>option</b> : option값은 객체로 로드합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target.value로 받아야 합니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <div className="grid gap-2 grid-cols-5">
            <Input type="file" onChange={(value) => console.log(value)} />
          </div>
          <Details title={"Code View"}>{codes[9].code}</Details>
          <ul className="guide-list">
            <li>
              <b>type</b> : 반드시 type을 file로 정의해야합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <div className="grid mt-5">
            <Input type="textarea" onChange={(value) => console.log(value)} />
          </div>
          <Details title={"Code View"}>{codes[10].code}</Details>
          <ul className="guide-list">
            <li>
              <b>type</b> : 반드시 type을 textarea로 정의해야합니다.
            </li>
            <li>
              <b>onChange</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <form onSubmit={handleSubmitCheckbox} className="check-group">
            <ul className="flex gap-4 mt-5">
              <li>
                <Checkbox color={"blue"} id={"check2_1"}>
                  체크상자1
                </Checkbox>
              </li>
              <li>
                <Checkbox id="check2_2" color={"blue"} checked={true}>
                  체크상자2
                </Checkbox>
              </li>
              <li>
                <Checkbox id="check2_4" color={"blue"} checked={true} disabled>
                  체크상자3 disabled
                </Checkbox>
              </li>
              <li>
                <Checkbox id="check2_3" color={"blue"} disabled>
                  체크상자4 disabled
                </Checkbox>
              </li>
            </ul>
            <ul className="flex gap-4 mt-5">
              <li>
                <Checkbox color={"blue"} id={"check3_1"} checked={true}>
                  체크상자5
                </Checkbox>
              </li>
              <li>
                <Checkbox color={"red"} id={"check3_2"} checked={true}>
                  체크상자6
                </Checkbox>
              </li>
              <li>
                <Checkbox color={"gray"} id={"check3_3"} checked={true}>
                  체크상자7
                </Checkbox>
              </li>
            </ul>
            <button type="submit" className="btn-blue mt-2">
              체크된 상자 확인
            </button>
          </form>
          <Details title={"Code View"} lang="javascript">
            {codes[11].code}
          </Details>
          <ul className="guide-list">
            <li>체크박스는 onChange로 체크상태를 전달하지 않습니다.</li>
            <li>
              <b>빽틱</b> 해당부분은 ``으로 표기해야 합니다.
            </li>
            <li>
              <b>($)</b> 해당부분은 $로 표기해야 합니다.
            </li>
            <li>
              <b>color</b> : blue, red, gray
            </li>
            <li>
              <b>id</b> : label의 for속성을 연결하기위해 필수로 입력해야 합니다.
            </li>
            <li>
              <b>checked</b> : 이미 체크된 상태를 정의합니다.
            </li>
            <li>
              <b>value</b> : label요소의 텍스트를 정의합니다.
            </li>
            <li>
              <b>disabled</b> : 비활성화된 상태를 정의합니다. 속성만 존재하며
              값은 없습니다.
            </li>
          </ul>
          <hr className="guide-line" />
          <ul className="flex gap-4 mt-5">
            <li>
              <form onSubmit={handleRadio}>
                <Radio
                  color={"blue"}
                  checked={isRadio === "남자"}
                  value={"남자"}
                  id={"hotel_reser1"}
                  name={"rag1"}
                  onChange={handleChange}
                />
                <Radio
                  color={"blue"}
                  value={"여자"}
                  checked={isRadio === "여자"}
                  id={"hotel_reser2"}
                  name={"rag1"}
                  onChange={handleChange}
                  className={"ml-2"}
                />
                <button type="submit" className="btn-blue ml-2">
                  checked 확인
                </button>
              </form>
            </li>
          </ul>
          <Details title={"Code View"} lang="javascript">
            {codes[12].code}
          </Details>
          <ul className="guide-list">
            <li>
              <b>color</b> : blue, red, gray, green
            </li>
            <li>
              <b>id</b> : label의 for속성을 연결하기위해 필수로 입력해야 합니다.
            </li>
            <li>
              <b>checked</b> : useState를 통한 상태가 true일때 value값과
              비교하여 true값을 반환하여 checked를 표현합니다.
            </li>
            <li>
              <b>value</b> : label요소의 텍스트를 정의합니다.
            </li>
            <li>
              <b>disabled</b> : 비활성화된 상태를 정의합니다. 속성만 존재하며
              값은 없습니다.
            </li>
            <li>
              <b>name</b> : 라디오 그룹을 정의하기 위한 값으로 관련된 그룹은
              모두 name값이 동일해야 합니다.
            </li>
            <li>
              <b>onChange</b> : 선택된 라디오 버튼의 value를 useState상태로
              전달합니다.
            </li>
            <li>
              <b>선택된상태 설정</b> :useState초깃값으로 선택된 상태의
              label텍스트를 지정합니다.
            </li>
          </ul>
          <hr className="guide-line" />
          <div className="flex gap-2 pt-5">
            <GuestCounter iscount={handleGuest} />
            <GuestCounter className={"sm"} kids iscount={handleGuest} />
            <GuestCounter
              className={"sm"}
              defaultValue={2}
              iscount={handleGuest}
            />
          </div>
          <Details title={"Code View"} lang="javascript">
            {codes[13].code}
          </Details>
          <ul className="guide-list">
            <li>인원수 체크를 위한 컴퍼넌트입니다.</li>
            <li>
              <b>iscount</b> : onChange이벤트로 변화된 value값을 전달받습니다.
              e.target을 이미 전달하고 있으니 매개변수로 value값만 받으면
              됩니다.
            </li>
            <li>
              <b>className</b> : 크기를 정합니다. ( sm )
            </li>
            <li>
              <b>kids</b> : 어린이용 카운터로 기본값이 0으로 값을 전달해도
              경고가 없습니다.
            </li>
            <li>
              <b>defaultValue</b> : 기본값을 전달합니다.
            </li>
          </ul>
          <hr className="guide-line" />
          {/* 기타UI */}
          <Heading tag={"h2"} className={"xl mt-10"} text={"Popup"} />
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
          <Details title={"Code View"} lang="javascript">
            {codes[14].code}
          </Details>
          <ul className="guide-list">
            <li>
              useState를 이용한 상태변화를 통해 팝업을 제어합니다. 반드시
              useState를 생성하세요.
            </li>
            <li>false : 닫힘, true : 열림</li>
            <li>팝업내용은 컴퍼넌트 열림 닫힘태그 사이에 직접 마크업합니다.</li>
            <li>
              <b>open</b> : 현재 상태를 전달받습니다. 기본은 false입니다.
            </li>
            <li>
              <b>close</b> : false값을 useState의 set에 전달합니다.
            </li>
            <li>
              <b>팝업 열기버튼</b> : 버튼에 onClick이벤트를 추가하여 상태를
              변화시킵니다.
            </li>
          </ul>
          <hr className="guide-line" />

          <button className="btn-blue-outline" onClick={showLoading}>
            페이지 로딩
          </button>
          {isLoading && <Loading />}
          <button className="btn-blue-outline ml-5" onClick={showLoading2}>
            일부 영역 로딩
          </button>
          <Box className={"mt-5 mx-auto w-72 text-center relative"}>
            일부영역
            <br />
            부모요소에 relative 필수
            {isLoading2 && <Loading2 />}
          </Box>
          <Details title={"Code View"} lang="javascript">
            {codes[15].code}
          </Details>
          <ul className="guide-list">
            <li>
              useState를 이용한 상태변화를 통해 로딩을 제어합니다. 반드시
              useState를 생성하세요.
            </li>
            <li>
              <b>&lt;Loading /&gt;</b> : 컴퍼넌트는 페이지 이동간에 사용됩니다.
            </li>
            <li>
              <b>&lt;Loading2 /&gt;</b> : 컴퍼넌트는 특정 컴퍼넌트 내의 로딩을
              표현합니다. 소속된 컴퍼넌트는 반드시 relative 클래스명을 넣습니다.
            </li>
          </ul>
          <hr className="guide-line" />

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
            {/* <Noimage props={{ image: null }} />
            <Noimage props={{ image: img }} /> */}
          </div>
          <Box>
            회색박스
            <Box className={"white"}>흰색박스</Box>
          </Box>
          <Details title={"Code View"} lang="javascript">
            {codes[16].code}
          </Details>
          <ul className="guide-list">
            <li>
              <b>&lt;Avatar /&gt;</b> : 프로필 사진 add속성을 추가하면
              편집모드로 됩니다.
            </li>
            <li>
              <b>&lt;HotelFavorite /&gt;</b> : 즐겨찾기 토글버튼 checked속성을
              추가하면 체크된 상태로 됩니다.
            </li>
            <li>
              <b>&lt;HotelPrice /&gt;</b> : 가격 안내 컴퍼넌트 price 속성을
              추가하면 숫자가 넣어집니다.
            </li>
            <li>
              <b>&lt;HotelLocation /&gt;</b> : 호텔카테고리 지역 컴퍼넌트
              location 속성을 추가하면 지역텍스트가 삽입됩니다. 크기 ( xl )
            </li>
            <li>
              <b>&lt;Box /&gt;</b> : 기본 회색박으로 표현합니다. 색상종류 (
              white )
            </li>
          </ul>
          <hr className="guide-line" />
        </div>
      </div>
    </>
  );
};

export default Styleguide;

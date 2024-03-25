export const codes = [
  {
    code: `<Heading tag={"h2"} className={"xl"} text={"Heading & Text"} />`,
  },
  {
    code: `<Text type={"1"}>Text type1</Text>`,
  },
  {
    code: `<button className="btn-blue">btn-blue</button>
<button className="btn-blue-label">btn-blue-label</button>
<button className="btn-blue-outline">btn-blue-outline</button>
<button className="btn-blue xl">btn-blue xl</button>
<button className="btn-blue xl2">btn-blue xl2</button>`,
  },
  {
    code: `<Badge color={"blue"}>blue</Badge>`,
  },
  {
    code: `const [isToast, setIsToast] = useState(false);

setIsToast(true);

{isToast && (
    <Toast onOpen={isToast} onClose={() => setIsToast(false)} color={"red"}>
        인원수가 초과되었습니다. 최대 {payInfo.MaxRoomCount}명 수용 가능합니다.
    </Toast>
)}`,
  },
  {
    code: `<Input type="text" defaultValue="text" onChange={(value) => console.log(value)} />
    `,
  },
  {
    code: `<Input type="date" name="start" min={Today()} value={isStart} onChange={(value) => console.log(value))} />`,
  },
  {
    code: `<Input type={"text"} price={true} placeholder="3자리마다 쉼표 숫자" onChange={(e) => console.log(e)} />`,
  },
  {
    code: `const select = [
{
    value: "select1",
    text: "선택하세요",
},
{
    value: "select2",
    text: "선택하세요2",
},
];

<Select options={select} onChange={(e) => console.log(e.target.value)} />`,
  },
  {
    code: `<Input type="file" onChange={(value) => console.log(value)} />`,
  },
  {
    code: `<Input type="textarea" onChange={(value) => console.log(value)} />`,
  },
  {
    code: `const handleSubmitCheckbox = (e) => {
e.preventDefault();
  const checkedTexts = [];
  document.querySelectorAll('.check-group input[type="checkbox"]:checked').forEach((checkbox) => {
    const label = document.querySelector(빽틱label[for=" ($){checkbox.id}"]빽틱);
    if (label) {
      checkedTexts.push(label.textContent.trim());
    }
  });
  setIsCheckbox(checkedTexts);
  console.log(checkedTexts);
};

<form onSubmit={handleSubmitCheckbox} className="check-group">
  <Checkbox color={"blue"} id={"check2_1"}>
    체크상자1
  </Checkbox>
  <Checkbox id="check2_2" color={"blue"} checked={true}>
    체크상자2
  </Checkbox>
  <Checkbox id="check2_4" color={"blue"} checked={true} disabled>
    체크상자3 disabled
  </Checkbox>

  <Checkbox color={"blue"} id={"check3_1"} checked={true}>
    체크상자5
  </Checkbox>
  <Checkbox color={"red"} id={"check3_2"} checked={true}>
    체크상자6
  </Checkbox>
  <Checkbox color={"gray"} id={"check3_3"} checked={true}>
    체크상자7
  </Checkbox>
  
  <button type="submit" className="btn-blue mt-2">
    체크된 상자 확인
  </button>
</form>
`,
  },
  {
    code: `const [isRadio, setIsRadio] = useState("남자");

const handleChange = (e) => {
    setIsRadio(e);
};
const handleRadio = (e) => {
    e.preventDefault();
    console.log(isRadio);
};

<form onSubmit={handleRadio}>
    <Radio color={"blue"} checked={isRadio === "남자"} value={"남자"} id={"hotel_reser1"} name={"rag1"} onChange={handleChange} />
    <Radio color={"blue"} value={"여자"} checked={isRadio === "여자"} id={"hotel_reser2"} name={"rag1"} onChange={handleChange} className={"ml-2"} />
    <button type="submit" className="btn-blue ml-2">
    checked 확인
    </button>
</form>`,
  },
  {
    code: `const handleGuest = (value) => {
  console.log(value);
};

<GuestCounter iscount={handleGuest} />
<GuestCounter className={"sm"} kids iscount={handleGuest} />
<GuestCounter className={"sm"} defaultValue={2} iscount={handleGuest} />`,
  },
  {
    code: `const [isPopup, setIsPopup] = useState(false);

const handlePopup = () => {
  setIsPopup(!isPopup);
};
    
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
</Dialog>`,
  },
  {
    code: `const [isLoading, setIsLoading] = useState(false);
const [isLoading2, setIsLoading2] = useState(false);

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
    
<button className="btn-blue-outline" onClick={showLoading}>
  페이지 로딩
</button>
{isLoading && <Loading />}

<button className="btn-blue-outline ml-5" onClick={showLoading2}>
  일부 영역 로딩
</button>
<Box className={"mt-5 mx-auto w-72 text-center relative"}>
  일부영역<br />부모요소에 relative 필수
  {isLoading2 && <Loading2 />}
</Box>`,
  },
  {
    code: `<Avatar />
<Avatar add={true} />

<HotelFavorite />
<HotelFavorite checked={true} />

<HotelPrice price={"5,000"} />

<HotelLocation location={"위치입력"} />
<HotelLocation location={"위치입력"} className={"xl"} />

<Box>회색박스</Box>
<Box className={"white"}>흰색박스</Box>`,
  },
  {
    code: ``,
  },
  {
    code: ``,
  },
  {
    code: ``,
  },
  {
    code: ``,
  },
  {
    code: ``,
  },
];

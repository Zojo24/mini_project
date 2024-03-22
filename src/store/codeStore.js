export const codes = [
  {
    code: `<Heading tag={"h2"} className={"xl"} text={"Heading & Text"} />;`,
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
    code: `<Checkbox color={"blue"} id={"check2_1"} value={"checkbox"} />
<Checkbox id="check2_2" color={"blue"} checked={true} value={"checkbox"} />
<Checkbox id="check2_4" color={"blue"} checked={true} disabled value={"disabled"} />
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

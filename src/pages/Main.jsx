import Advertisement from "../components/Advertisement";
import Destinations from "../components/Destinations";
import Heading from "../components/Heading";
import HotelList from "../components/Hotel/HotelList";
import Search from "../components/Search";
import Text from "../components/Text";
import Visual from "../components/Visual";
import "../styles/pages/main.css";

const Main = () => {
  return (
    <>
      <Visual>
        <Search />
      </Visual>
      <div className="main">
        <div className="container pb-20">
          <Heading tag={"h2"} className="xl" text={"Top Destinations"} />
          <Text type="1" className="text-center">
            최고의 목적지를 보고 다음 여행을 위한 완벽한 숙소를 발견하세요.
            <br />
            화려한 해변부터 붐비는 도시까지, 우리는 모든 여행자의 취향에 맞춰 드리고 있습니다.
          </Text>
          <Destinations />
        </div>

        <div className="bg-blue">
          <div className="container">
            <Heading tag={"h2"} className="xl" text={"Available Hotel"} />
            <Text type="1" className="text-center">
              TripHotel은 여행지에서 편안한 숙박을 위한 이상적인 선택지입니다.
              <br />
              고풍스러운 객실, 편리한 시설, 그리고 친절한 서비스로 여행을 더욱 즐겁고 편안하게 만들어 나아가세요.
            </Text>
            <HotelList className={"mt-8"} />
          </div>
        </div>
        <Advertisement />
      </div>
    </>
  );
};

export default Main;

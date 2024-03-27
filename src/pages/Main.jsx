import { useEffect } from "react";
import Advertisement from "../components/Advertisement";
import Destinations from "../components/Destinations";
import Heading from "../components/Heading";
import HotelList from "../components/Hotel/HotelList";
import Search from "../components/Search";
import Text from "../components/Text";
import Visual from "../components/Visual";
import "../styles/pages/main.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Visual>
        <Search data-aos="fade-up" />
      </Visual>
      <div className="main">
        <div className="container mobile:pb-10 tablet:pb-20">
          <Heading tag={"h2"} className="xl" text={"Top Destinations"} data-aos="fade-up" />
          <Text type="1" className="text-center" data-aos="fade-up" data-aos-delay="200">
            최고의 목적지를 보고 다음 여행을 위한 완벽한 숙소를 발견하세요.
            <br />
            화려한 해변부터 붐비는 도시까지, 우리는 모든 여행자의 취향에 맞춰 드리고 있습니다.
          </Text>
          <Destinations data-aos="fade-up" data-aos-delay="400" />
        </div>

        <div className="bg-blue">
          <div className="container">
            <Heading tag={"h2"} className="xl" text={"Available Hotel"} data-aos="fade-up" data-aos-delay="300" />
            <Text type="1" className="text-center" data-aos="fade-up" data-aos-delay="400">
              TripHotel은 여행지에서 편안한 숙박을 위한 이상적인 선택지입니다.
              <br />
              고풍스러운 객실, 편리한 시설, 그리고 친절한 서비스로 여행을 더욱 즐겁고 편안하게 만들어 나아가세요.
            </Text>
            <HotelList className={"mt-8"} data-aos="fade-up" data-aos-delay="500" />
          </div>
        </div>
        <Advertisement data-aos="fade-in" data-aos-delay="500" />
      </div>
    </>
  );
};

export default Main;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.webp";
import category3 from "../assets/category3.webp";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";
import axios from "axios";
import { useSearchStore } from "../store/searchStore";
import Loading2 from "../components/Loading2";
import { useNavigate } from "react-router-dom";

const DestinationsItems = () => {
  const { setSearchTerm } = useSearchStore();
  const [nation, setNation] = useState("");
  const [isLoading2, setIsLoading2] = useState(false);
  const navigate = useNavigate();
  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  const handleDestinationClick = async (destination) => {
    setNation(destination.value);
    setSearchTerm(destination.value);
    setIsLoading2(true);

    try {
      const response = await axios.get(
        `http://52.78.12.252:8080/api/hotels/nation/${destination.value}`
      );
      setSearchResults(response.data.result.content);
      console.log(response.data.result.content);
      navigate("/search/result");
    } catch (error) {
      console.error("호텔 검색에 실패했습니다:", error);
      setSearchResults([]);
    } finally {
      setIsLoading2(false);
    }
  };

  return (
    <>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "THAILAND", text: "태국" })
        }
      >
        <div className="destinations__thumbnail">
          <img src={category1} alt="태국" />
        </div>
        <div className="destinations__info">
          <strong>Thailand</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "VIETNAM", text: "베트남" })
        }
      >
        <div className="destinations__thumbnail">
          <img src={category2} alt="베트남" />
        </div>
        <div className="destinations__info">
          <strong>Vietnam</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "PHILIPPINES", text: "필리핀" })
        }
      >
        <div className="destinations__thumbnail">
          <img src={category3} alt="필리핀" />
        </div>
        <div className="destinations__info">
          <strong>Philippines</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "MALAYSIA", text: "말레이시아" })
        }
      >
        <div className="destinations__thumbnail">
          <img src={category4} alt="말레이시아" />
        </div>
        <div className="destinations__info">
          <strong>Malaysia</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "TAIWAN", text: "대만" })
        }
      >
        <div className="destinations__thumbnail">
          <img src={category5} alt="대만" />
        </div>
        <div className="destinations__info">
          <strong>Taiwan</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
      {isLoading2 && <Loading2 />}
    </>
  );
};

export default DestinationsItems;

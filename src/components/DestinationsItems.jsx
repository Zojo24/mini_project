import React from "react";
import { Link } from "react-router-dom";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.webp";
import category3 from "../assets/category3.webp";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";
import useFetchHotels from "../hooks/useFetchHotels";
import { useSearchStore } from "../store/searchStore";
import Loading from "./Loading";

const DestinationsItems = () => {
  const { isLoading, fetchHotels, error } = useFetchHotels();
  const { setSearchTerm } = useSearchStore();

  const handleDestinationClick = async (destination) => {
    setSearchTerm(destination.value);
    console.log(destination.value);
    try {
      await fetchHotels();
    } catch (err) {
      console.error("Fetching hotels failed", err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Link
        onClick={() =>
          handleDestinationClick({ value: "THAILAND", text: "태국" })
        }
        to="/"
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
        to="/"
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
        to="/"
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
        to="/"
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
        to="/"
      >
        <div className="destinations__thumbnail">
          <img src={category5} alt="대만" />
        </div>
        <div className="destinations__info">
          <strong>Taiwan</strong>
          <span>1 Hotel</span>
        </div>
      </Link>
    </>
  );
};

export default DestinationsItems;

import { useState } from "react";
import axios from "axios";

const useFetchHotels = () => {
  const [isLoading2, setIsLoading2] = useState(false);

  const fetchHotels = async (searchTerm) => {
    console.log(searchTerm);
    setIsLoading2(true);
    try {
      const response = await axios.get(`/api/hotels?query=${searchTerm}`);
      return response.data.content || [];
    } catch (error) {
      console.error("Hotel fetch failed:", error);
    } finally {
      setIsLoading2(false);
    }
  };

  return { isLoading2, fetchHotels };
};

export default useFetchHotels;

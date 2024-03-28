import { useState } from "react";
import axios from "axios";
import { useSearchStore } from "../store/searchStore";

const useFetchHotels = () => {
  const [isLoading2, setIsLoading2] = useState(false);
  const { searchTerm, setSearchResults } = useSearchStore();

  const fetchHotels = async () => {
    setIsLoading2(true);
    try {
      const response = await axios.get(`/api/hotels?query=${searchTerm}`);
      setSearchResults(response.data.content || []);
    } catch (error) {
      console.error("Hotel fetch failed:", error);
    } finally {
      setIsLoading2(false);
    }
  };

  return { isLoading2, fetchHotels };
};

export default useFetchHotels;

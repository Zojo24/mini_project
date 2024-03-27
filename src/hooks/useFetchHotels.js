import { useState } from "react";
import axios from "axios";
import { useSearchStore } from "../store/searchStore";

const useFetchHotels = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm, setSearchResults } = useSearchStore();

  const fetchHotels = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/hotels?query=${searchTerm}`);
      setSearchResults(response.data.content || []);
    } catch (error) {
      console.error("Hotel fetch failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchHotels };
};

export default useFetchHotels;

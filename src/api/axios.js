import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.78.12.252:8080",
  params: {
    api_key: "",
  },
});
export default instance;

import axios from "axios";
const Url = "https://server-portfolio-guad.onrender.com/api/";

export const PUBLIC_REQUEST = axios.create({
  baseURL: BASE_URL,
});

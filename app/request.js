import axios from "axios";
const Url = "http://localhost:5000/api";

export const PUBLIC_REQUEST = axios.create({
  baseURL: BASE_URL,
});

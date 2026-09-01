import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8989/api",
  withCredentials: true,
});
export default api;
//import.meta.env.VITE_API_URL ||

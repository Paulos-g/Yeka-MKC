import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://localhost:8989",
  withCredentials: true,
});
export default api;

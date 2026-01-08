import axios from "axios";

const api = axios.create({
  baseURL: "/", // usa o proxy configurado no vite
  timeout: 10000,
});

export default api;

import axios from "axios";

export const api = axios.create({
  //aqui vai a url oficial achooo???
  baseURL: "",
  timeout: 10000,
});

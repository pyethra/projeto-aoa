import axios from "axios";

const apiDB = axios.create({
  baseURL: "https://localhost:7213/api",
  timeout: 100000,
});

export const getAlbumAvaliados = async () => {
  const responseAPI = await apiDB.get(`/AlbumsAvaliados`);
  return responseAPI.data;
};

export const getUsers = async () => {
  const responseAPI = await apiDB.get(`/Users`);
  return responseAPI.data;
};

export default apiDB;

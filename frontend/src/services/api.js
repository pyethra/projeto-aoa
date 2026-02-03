import axios from "axios";

const apiDB = axios.create({
  baseURL: "http://projeto-aoa.runasp.net/api", // usa o proxy configurado no vite
  timeout: 10000,
});

export const getAlbum_avaliados = async () => {
  const responseAPI = await apiDB.get(`/album_avaliados_`);
  return responseAPI.data;
};

export const getUsers = async () => {
  const responseAPI = await apiDB.get(`/users_`);
  return responseAPI.data;
};

export default api;

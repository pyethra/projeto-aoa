import api from "./api";

export default async function getAlbum() {
  try {
    const response = await api.get(
      "/api/release/590319a1-6e5e-46f3-9a43-5dfb16f028c8?fmt=json"
    );
    console.log(response.data);
  } catch (erro) {
    console.log("Erro aquiiii " + erro);
  }
}

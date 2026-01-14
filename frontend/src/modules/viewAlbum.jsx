import "./styles/viewAlbum-styles.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
//import getAlbum from '../services/serviceAlbum'
import capaAlbum_vez from "../album_vez/bacocapa.jpg";
import album_vez from "../album_vez/album_vez.json";
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function ViewAlbum() {
  const navigate = useNavigate();
  //const [album, setAlbum] = useState({faixas: []});

  /*
    useEffect(() => {
    async function carregarFaixas () {
    try {
      const dataGetAlbum = await getAlbum();
      const capaUrl = dataGetAlbum?.image?.contentUrl || "capaTeste.jpg";
      const albumFormatado = {
        capaAlbum: dataGetAlbum?.image?.contentUrl || capaUrl,
        tituloAlbum: dataGetAlbum.name,
        artistas: dataGetAlbum.creditedTo,
        duracaoAlbum: 0, // "PT51M23S"
        faixas: dataGetAlbum.track.map(track => ({
            id: track["@id"],
            numero: track.trackNumber,
            tituloFaixa: track.name,
            duracaoFaixa: track.duration // exemplo: "PT03M15S"
            }))
        };
      setAlbum(albumFormatado);
      console.log(albumFormatado);

    } catch (erro) {
      console.error("erro ao carregar faixas", erro);
    } 
  }
  carregarFaixas();
}, []);
  */

  const album = album_vez;

  return (
    <div id="pag-Album">
      <button onClick={() => navigate(-1)} className="btn-voltar">
        <IoChevronBack size={24} />
      </button>

      {album && (
        <div className="Info-Album">
          <img src={capaAlbum_vez} alt="Capa do álbum" className="CapaAlbum" />

          <div className="teste">
            <p className="tituloAlbum">{album.Titulo_album}</p>

            <div className="infoDesc">
              <p className="nomeArtista">{album.Nome_artista}</p>
              <p>•</p>
              <p>Duração: {album.Duracao} min</p>
            </div>
          </div>
        </div>
      )}

      <div className="Faixas">
        <div className="header">
          <span className="num">#</span>
          <span className="FaixaTitulo">Nome</span>
        </div>

        {album.Faixas.map((Faixas, index) => {
          return (
            <div className="row" key={index}>
              <span className="Num">{index + 1}</span>
              <span className="TituloFaixa">{Faixas}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

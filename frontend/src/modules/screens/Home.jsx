import "../styles/Home-styles.css";
import { useNavigate } from "react-router-dom";
import capaAlbum_vez from "../../album_vez/bacocapa.jpg";
import album_vez from "../../album_vez/album_vez.json";
import { IoChevronBack } from "react-icons/io5";
import CarrouselAlbums from "../components/CarrouselAlbums";

export default function Home() {
  const album = album_vez;
  const navigate = useNavigate();

  return (
    <div id="homePag">
      <div id="Album-da-vez">
        {album && (
          <div
            className="album-card"
            onClick={() => navigate("/album")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={capaAlbum_vez}
              alt="Capa do álbum"
              className="CapaAlbum"
            />

            <div className="teste_">
              <p className="tituloAlbum_">{album.Titulo_album}</p>

              <div className="infoDesc_">
                <p className="nomeArtista">{album.Nome_artista}</p>
                <p>•</p>
                <p>{album.Duracao} min</p>
              </div>

              <div className="infoIndicacao">
                <p>{album.Lancamento}</p>
                <p>•</p>
                <p>{album.Genero}</p>
                <p>•</p>
                <p>{album.Pais}</p>
              </div>

              <p className="Indicado">Indicado por: {album.Indicado_por}</p>
            </div>
          </div>
        )}
      </div>

      <div id="Carrousel-HistAlbums">
        <CarrouselAlbums></CarrouselAlbums>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import CardCarrousel from "../components/CardCarrousel.jsx";
import "../styles/Home-styles.css";
import CarrouselAlbums from "../components/CarrouselAlbums";
import AlbumCard from "../components/AlbumCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BotaoFiltro from "../../modules/components/BotaoFiltro.jsx";

export default function Home() {
  const [albumAvaliadosBD, setalbumAvaliadosBD] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7213/api/AlbumsAvaliados")
      .then((respAPI) => respAPI.json())
      .then((data) => {
        setalbumAvaliadosBD(data);
      })
      .catch((error) => {
        console.error(
          "Erro ao carregar albuns avaliados anteriormente:",
          error,
        );
      });
  }, []);

  return (
    <div id="homePag">
      <AlbumCard></AlbumCard>

      <BotaoFiltro></BotaoFiltro>

      <CarrouselAlbums>
        {albumAvaliadosBD.map((album) => (
          <CardCarrousel
            key={album.id}
            AlbumCapa={album.AlbumCapa}
            AlbumTitulo={album.albumTitulo}
            AlbumArtistas={album.albumArtistas}
            AlbumMediaAvaliacao={album.AlbumMediaAvaliacao}
            AlbumQuantAvaliacao={album.AlbumQuantAvaliacao}
          ></CardCarrousel>
        ))}
      </CarrouselAlbums>
    </div>
  );
}

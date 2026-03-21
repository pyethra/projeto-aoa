import { useEffect, useState } from "react";
import CardCarrousel from "../components/CardCarrousel.jsx";
import "../styles/Home-styles.css";
import CarrouselAlbums from "../components/CarrouselAlbums";
import AlbumCard from "../components/AlbumCard";
import { getAlbumAvaliados } from "../services/api.js";
import BotaoFiltro from "../components/BotaoFiltro.jsx";

export default function Home() {
  const [AlbumAvaliadosBD, setAlbumAvaliadosBD] = useState([]);
  const [Temporadas, setTemporadas] = useState([]);
  const [temporadaSelecionada, setTemporadaSelecionada] = useState();
  const [filtroAvaliacao, setFiltroAvaliacao] = useState();
  const [statusAvaliacao, setStatusAvaliacao] = useState([]);

  useEffect(() => {
    carregarAlbums();
  }, []);

  const carregarAlbums = async () => {
    const data = await getAlbumAvaliados();
    setAlbumAvaliadosBD(data);

    const temporadasQuant = [...new Set(data.map((a) => a.temporada))].sort(
      (a, b) => a - b,
    );
    setTemporadas(temporadasQuant);

    const status = [...new Set(data.map((a) => a.avaliado))];
    setStatusAvaliacao(status);
  };

  const FiltroAlbumsCarrousel = AlbumAvaliadosBD.filter((album) => {
    if (temporadaSelecionada && album.temporada !== temporadaSelecionada) {
      return false;
    }

    if (filtroAvaliacao !== undefined && album.avaliado !== filtroAvaliacao) {
      return false;
    }

    return true;
  });

  return (
    <div id="homePag">
      <AlbumCard></AlbumCard>

      <div style={{ display: "flex", gap: 20, margin: 10 }}>
        <div>
          <BotaoFiltro
            tituloPadrao="Selecionar temporada"
            valorSelecionado={temporadaSelecionada}
            opcoes={Temporadas}
            onSelecionar={setTemporadaSelecionada}
            renderLabel={(t) => `Temporada ${t}`}
          />
        </div>

        <div>
          <BotaoFiltro
            tituloPadrao="Albuns avaliados"
            valorSelecionado={filtroAvaliacao}
            opcoes={statusAvaliacao}
            onSelecionar={setFiltroAvaliacao}
            renderLabel={(v) => (v ? "Avaliados" : "Não avaliados")}
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          height: "500px",
          margin: "0 auto",
        }}
      >
        <CarrouselAlbums>
          {FiltroAlbumsCarrousel.map((album) => (
            <CardCarrousel
              key={album.id_album_avaliado}
              AlbumCapa={album.AlbumCapa}
              AlbumTitulo={album.albumTitulo}
              AlbumArtistas={album.albumArtistas}
              AlbumTemporada={album.temporada}
              AlbumAvaliado={album.avaliado}
              AlbumMediaAvaliacao={album.AlbumMediaAvaliacao}
              AlbumQuantAvaliacao={album.AlbumQuantAvaliacao}
            ></CardCarrousel>
          ))}
        </CarrouselAlbums>
      </div>
    </div>
  );
}

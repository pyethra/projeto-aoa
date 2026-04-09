import { useEffect, useState } from "react";
import "../styles/Home-styles.css";
import AlbumCard from "../components/AlbumCard.jsx";
import BotaoFiltro from "../components/BotaoFiltro.jsx";
import ListaAlbums from "../components/ListaAlbums.jsx";

export default function ScreenHome() {
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
            tituloPadrao="Selecionar avaliados"
            valorSelecionado={filtroAvaliacao}
            opcoes={statusAvaliacao}
            onSelecionar={setFiltroAvaliacao}
            renderLabel={(v) => (v ? "Avaliados" : "Não avaliados")}
          />
        </div>
      </div>

      <ListaAlbums></ListaAlbums>
    </div>
  );
}

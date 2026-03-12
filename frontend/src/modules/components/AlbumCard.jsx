import "../styles/AlbumCard-styles.css";
import Cover from "../../album_vez/bacocapa.jpg";
import capaAlbumvez from "../../album_vez/bacocapa.jpg";
import album from "../../album_vez/album_vez.json";

export default function AlbumCard() {
  return (
    <div id="AlbumAtual">
      <div>
        <img src={capaAlbumvez} alt="Capa do álbum" className="album-cover" />
      </div>

      <div style={{ alignContent: "center" }}>
        <div style={{}}>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {album.Titulo_album}
          </p>

          <p style={{ fontSize: "18px", marginBottom: "10px", marginTop: 0 }}>
            {album.Nome_artista}
          </p>
        </div>

        <div style={{ color: "darkgrey" }}>
          <p>{album.Duracao} min</p>

          <div className="Infos-Album">
            <p>{album.Lancamento} • </p>
            <p>{album.Genero} • </p>
            <p>{album.Pais}</p>
          </div>
          <p>Indicado por: {album.Indicado_por}</p>
        </div>
      </div>
    </div>
  );
}

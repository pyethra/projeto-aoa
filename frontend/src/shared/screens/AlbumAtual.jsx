import "../styles/Home-styles.css";
import { useNavigate } from "react-router-dom";
import capaAlbum_vez from "../../album_vez/bacocapa.jpg";
import album_vez from "../../album_vez/album_vez.json";
import { IoChevronBack } from "react-icons/io5";
import CarrouselAlbums from "../components/CarrouselAlbums";
import AlbumCard from "../components/AlbumCard";

export default function AlbumAtual() {
  const navigate = useNavigate();

  return (
    <div id="Album-da-vez">
      <AlbumCard>
        album={album_vez}
        cover={capaAlbum_vez}
        onClick={() => navigate("/album")}
      </AlbumCard>
    </div>
  );
}

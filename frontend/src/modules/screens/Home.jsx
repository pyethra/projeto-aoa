<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>;

import CardCarrousel from "../components/CardCarrousel.jsx";
import "../styles/Home-styles.css";
import { useNavigate } from "react-router-dom";
import CarrouselAlbums from "../components/CarrouselAlbums";
import AlbumCard from "../components/AlbumCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const slides = ["../../album_vez/bacocapa.jpg"];

  return (
    <div id="homePag">
      <AlbumCard></AlbumCard>

      <div style={{ display: "flex" }}>
        <CardCarrousel></CardCarrousel>
        <CardCarrousel></CardCarrousel>
        <CardCarrousel></CardCarrousel>
      </div>
    </div>
  );
}

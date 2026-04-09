import { useQuery } from "@tanstack/react-query";

import { getAlbumAvaliados } from "../services/api.js";

import CardAlbum from "./CardAlbum";
import CarrouselAlbums from "./CarrouselAlbums";
import MockupAlbumsAvaliados from "../Mockups/MockupAlbumsAvaliados.json";

export default function ListaAlbums() {
  return (
    <div style={{ margin: "10px" }}>
      <CarrouselAlbums
        options={{
          perPage: 3,

          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {MockupAlbumsAvaliados.map((itemAvaliacao) => (
          <CardAlbum
            key={itemAvaliacao.id_album}
            AlbumTitulo={itemAvaliacao.AlbumTitulo}
            temporada={itemAvaliacao.temporada}
            AlbumArtistas={itemAvaliacao.AlbumArtistas}
          />
        ))}
      </CarrouselAlbums>
    </div>
  );
}

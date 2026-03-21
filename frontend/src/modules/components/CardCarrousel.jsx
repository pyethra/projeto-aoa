import Card from "react-bootstrap/Card";
import "../styles/CardCarrousel-styles.css";
import { FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export default function CardCarrousel({
  AlbumCapa,
  AlbumTitulo,
  AlbumArtistas,
  AlbumTemporada,
  AlbumAvaliado,
  AlbumMediaAvaliacao,
  AlbumQuantAvaliacao,
}) {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Card
        style={{
          width: "300px",
          backgroundColor: "#212530",
          borderRadius: "5px",
          maxWidth: "500px",
        }}
      >
        <Card.Img
          style={{
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "block",
          }}
          className="card-img-top"
          src="./src/album_vez/bacocapa.jpg"
          //{AlbumCapa}
        />
        <Card.Body className="CardBody">
          <div>
            <Card.Title className="AlbumTitulo">{AlbumTitulo}</Card.Title>
            <Card.Title className="AlbumArtistas">{AlbumArtistas}</Card.Title>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: "5px",
              alignContent: "center",
              flexDirection: "row",
            }}
          >
            <div className="AlbumTemporada">Temporada: {AlbumTemporada}</div>
            <div className="AlbumAvaliado">
              {AlbumAvaliado ? "Avaliado" : "Não avaliado"}
            </div>
          </div>

          <div className="CardText">
            <div className="AlbumRatings">
              <div className="AlbumMediaRatings">
                <FaStar className="Icon"></FaStar>
                <span className="TextRating">10{AlbumMediaAvaliacao}</span>
              </div>
              <div className="AlbumRatingCount">
                <FaUserGroup className="Icon"></FaUserGroup>
                <span className="TextRating">10{AlbumQuantAvaliacao}</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

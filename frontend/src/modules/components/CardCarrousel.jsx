import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/CardCarrousel-styles.css";
import { FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function CardCarrousel() {
  const { AlbumCapa, setAlbumCapa } = useState();
  const { AlbumTitulo, setAlbumTitulo } = useState();
  const { AlbumArtistas, setAlbumArtistas } = useState();
  const { AlbumMediaAvaliacao, setAlbumMediaAvaliacao } = useState();
  const { AlbumQuantAvaliacao, setAlbumQuantAvaliacao } = useState();

  /*useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
*/

  return (
    <div
      style={{
        padding: "5px",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Card
        style={{
          width: "13rem",
          backgroundColor: "#212530",
          borderRadius: "5px",
          alignContent: "center",
        }}
      >
        <Card.Img
          style={{
            width: "100%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
          className="card-img-top"
          src="./src/album_vez/bacocapa.jpg"
          //{AlbumCapa}
        />
        <Card.Body style={{ marginLeft: "10px" }}>
          <Card.Title style={{ fontSize: "19px", fontWeight: "600" }}>
            {AlbumTitulo}
          </Card.Title>
          <Card.Title style={{ fontSize: "14px", color: "darkgrey" }}>
            {AlbumArtistas}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "14px",
              paddingTop: "3px",
              paddingBottom: "10px",
              display: "flex",
              gap: 10,
              margin: 0,
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <FaStar
                  size={15}
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                ></FaStar>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {AlbumMediaAvaliacao}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 5,
                  justifyContent: "center",
                  alignContent: "center",
                  margin: 0,
                  alignItems: "center",
                }}
              >
                <FaUserGroup
                  size={15}
                  style={{
                    margin: 0,
                    padding: 0,
                    size: 8,
                  }}
                ></FaUserGroup>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {AlbumQuantAvaliacao}
                </p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

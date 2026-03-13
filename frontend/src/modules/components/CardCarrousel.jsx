import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/CardCarrousel-styles.css";
import { FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function CardCarrousel({
  AlbumCapa,
  AlbumTitulo,
  AlbumArtistas,
  AlbumMediaAvaliacao,
  AlbumQuantAvaliacao,
}) {
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
        <Card.Body className="CardBody">
          <Card.Title className="AlbumTitulo">{AlbumTitulo}</Card.Title>
          <Card.Title className="AlbumArtistas">{AlbumArtistas}</Card.Title>
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

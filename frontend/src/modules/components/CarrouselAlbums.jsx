import Carousel from "react-bootstrap/Carousel";
//import ExampleCarouselImage from "../../album_vez/bacocapa.jpg";
import "../styles/CarrouselAlbums-styles.css";

function CarrouselAlbums() {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselAlbums;

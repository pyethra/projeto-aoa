import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CarrouselAlbums({ children, options = {} }) {
  return (
    <Splide
      options={{
        height: "auto",
        type: "loop",
        perPage: 5,
        gap: "30px",
        pagination: false,
        arrows: true,
        drag: "free",
        snap: true,
        focus: "center",

        breakpoints: {
          1280: { perPage: 3 },
          1024: { perPage: 3 },
          640: { perPage: 3 },
        },
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <SplideSlide key={index}>{child}</SplideSlide>
        ))
      ) : (
        <SplideSlide>{children}</SplideSlide>
      )}
    </Splide>
  );
}

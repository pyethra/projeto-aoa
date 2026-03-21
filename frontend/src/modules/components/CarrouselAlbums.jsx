import "../styles/CarrouselAlbums-styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function CarrouselAlbums({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  slidesPerView = 2,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // garante array
  const slides = Array.isArray(children) ? children : [children];

  // cria páginas de slides
  const pages = [];
  for (let i = 0; i < slides.length; i += slidesPerView) {
    pages.push(slides.slice(i, i + slidesPerView));
  }

  const totalPages = pages.length;

  const previousSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, totalPages]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {pages.map((page, index) => (
          <div className="carousel-slide" key={index}>
            <div className="carousel-page">{page}</div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={previousSlide} className="carousel-button">
          <BiChevronLeft size={40} />
        </button>

        <button onClick={nextSlide} className="carousel-button">
          <BiChevronRight size={40} />
        </button>
      </div>

      <div className="carousel-indicators">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`indicator ${currentSlide === i ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

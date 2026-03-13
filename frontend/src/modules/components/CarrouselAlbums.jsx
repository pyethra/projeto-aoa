import "../styles/CarrouselAlbums-styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function CarrouselAlbums({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // garante que children seja sempre array
  const slides = Array.isArray(children) ? children : [children];

  const previousSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide}
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
        {slides.map((_, i) => (
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

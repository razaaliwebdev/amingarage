import React, { useState, useEffect } from "react";
import { slidesImages } from "../assets/assets.js";

const BannerSlider = ({
  autoPlay = true,
  interval = 5000,
  aspectRatio = "16/9",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Convert slidesImages object to array
  const images = Object.values(slidesImages);

  // Calculate padding-bottom based on aspect ratio
  const aspectRatioParts = aspectRatio.split("/");
  const aspectRatioPercent = (aspectRatioParts[1] / aspectRatioParts[0]) * 100;

  // Auto-advance slides if autoPlay is enabled
  useEffect(() => {
    if (!autoPlay || isTransitioning) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isTransitioning]);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      {/* Aspect ratio container */}
      <div
        className="relative w-full"
        style={{ paddingBottom: `${aspectRatioPercent}%` }}
      >
        {/* Slides container */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={
                  typeof image === "string" ? image : image.src || image.default
                }
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ transition: "opacity 500ms ease-in-out" }}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
          onClick={goToNext}
          aria-label="Next slide"
        >
          &rarr;
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;

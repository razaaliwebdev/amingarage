import React, { useState, useEffect } from "react";
import { slidesImages } from "../assets/assets.js";
import banner3 from "../assets/banner3.jpg";
import mobileBanner from "../assets/mobileBanner.jpg";

const BannerSlider = ({ autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = Object.values(slidesImages);

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
    <div className="relative w-full h-full overflow-hidden rounded-md shadow-md">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Desktop Image (hidden on mobile) */}
            <img
              src={banner3}
              alt="Desktop banner"
              className="hidden md:block w-full h-full object-cover"
            />
            {/* Mobile Image (hidden on desktop) */}
            <img
              src={mobileBanner}
              alt="Mobile banner"
              className="block md:hidden w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile if you prefer */}
      <button
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors z-10"
        onClick={goToPrev}
        aria-label="Previous"
      >
        &larr;
      </button>
      <button
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors z-10"
        onClick={goToNext}
        aria-label="Next"
      >
        &rarr;
      </button>

      {/* Slide Indicators - Smaller on mobile */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-200 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

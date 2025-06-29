import React, { useState, useEffect } from "react";
import { banners, bannerMb } from "../assets/assets.js";
import banner3 from "../assets/banner3.jpg";

const BannerSlider = ({ autoPlay = true, interval = 1500 }) => {
  const desktopImages = Object.values(banners);
  const mobileImages = Object.values(bannerMb);

  // Choose the smaller length to avoid index mismatch
  const totalSlides = Math.min(desktopImages.length, mobileImages.length);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, totalSlides]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            {/* Desktop Image */}
            <img
              src={desktopImages[index]}
              alt={`Slide ${index + 1}`}
              className="hidden md:block w-full h-full object-cover"
            />
            {/* <img
              src={banner3}
              alt=""
              className="hidden md:block w-full h-full object-cover"
            /> */}
            {/* Mobile Image */}
            <img
              src={mobileImages[index]}
              alt={`Slide ${index + 1}`}
              className="block md:hidden w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

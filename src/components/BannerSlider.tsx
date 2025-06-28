import React, { useState, useEffect, useRef } from "react";

const BannerSlider = ({ slides }) => {
  const [index, setIndex] = useState(1); // start at the real first slide (not clone)
  const [transition, setTransition] = useState(true);
  const slideRef = useRef(null);

  // Clone last and first slides
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Slide change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Smooth transition loop reset
  useEffect(() => {
    if (index === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1); // jump back to real first
      }, 700); // match with transition duration
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extendedSlides.length - 2); // jump to real last
      }, 700);
    }
  }, [index, extendedSlides.length]);

  // Reset transition state after jump
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => {
        setTransition(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [transition]);

  // Manual controls
  const goTo = (i) => {
    setIndex(i + 1); // skip the first clone
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={slideRef}
        className={`flex w-full h-full transition-transform duration-700 ease-in-out ${
          transition ? "" : "transition-none"
        }`}
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${extendedSlides.length * 100}%`,
        }}
      >
        {extendedSlides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative rounded">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-50 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === (index - 1 + slides.length) % slides.length
                ? "bg-white w-6"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Default slides
BannerSlider.defaultProps = {
  slides: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwZ2FyYWdlfGVufDB8fDB8fHww",
      title: "Premium Services",
      description: "Experience our top-tier automotive services",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1599256630445-67b5772b1204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMGdhcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Expert Technicians",
      description: "Our certified mechanics ensure quality work",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1638904467737-e7e19199081d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhciUyMGdhcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Modern Facility",
      description: "State-of-the-art equipment for all your needs",
    },
  ],
};

export default BannerSlider;
